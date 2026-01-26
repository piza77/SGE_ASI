const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/database');
const config = require('../config/config');
const auditService = require('./auditService');

class AuthService {
  /**
   * Register a new user
   */
  async register(userData, ipAddress, userAgent) {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      const { tenantId, email, password, firstName, lastName, phone, roleId } = userData;

      // Check if user already exists
      const [existingUsers] = await connection.execute(
        'SELECT id FROM users WHERE tenant_id = ? AND email = ?',
        [tenantId, email]
      );

      if (existingUsers.length > 0) {
        throw new Error('User with this email already exists in this tenant');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, config.bcryptRounds);

      // Insert user
      const [result] = await connection.execute(
        `INSERT INTO users (tenant_id, email, password, first_name, last_name, phone, status) 
         VALUES (?, ?, ?, ?, ?, ?, 'active')`,
        [tenantId, email, hashedPassword, firstName, lastName, phone || null]
      );

      const userId = result.insertId;

      // Assign role to user (default to 'User' role if not specified)
      let assignedRoleId = roleId;
      if (!assignedRoleId) {
        const [defaultRole] = await connection.execute(
          'SELECT id FROM roles WHERE tenant_id = ? AND name = ?',
          [tenantId, 'User']
        );
        assignedRoleId = defaultRole[0]?.id;
      }

      if (assignedRoleId) {
        await connection.execute(
          'INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)',
          [userId, assignedRoleId]
        );
      }

      // Create audit log
      await auditService.log(connection, {
        tenantId,
        userId: null,
        action: 'user.register',
        entityType: 'user',
        entityId: userId,
        newValues: { email, firstName, lastName },
        ipAddress,
        userAgent
      });

      await connection.commit();

      return {
        id: userId,
        email,
        firstName,
        lastName,
        tenantId
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  /**
   * Login user and generate JWT token
   */
  async login(email, password, tenantSlug, ipAddress, userAgent) {
    const connection = await pool.getConnection();
    
    try {
      // Get tenant by slug
      const [tenants] = await connection.execute(
        'SELECT id, name, status FROM tenants WHERE slug = ?',
        [tenantSlug]
      );

      if (tenants.length === 0) {
        throw new Error('Tenant not found');
      }

      const tenant = tenants[0];

      if (tenant.status !== 'active') {
        throw new Error('Tenant is not active');
      }

      // Get user by email and tenant
      const [users] = await connection.execute(
        `SELECT id, tenant_id, email, password, first_name, last_name, status, failed_login_attempts
         FROM users WHERE tenant_id = ? AND email = ?`,
        [tenant.id, email]
      );

      if (users.length === 0) {
        throw new Error('Invalid credentials');
      }

      const user = users[0];

      if (user.status === 'locked') {
        throw new Error('Account is locked. Please contact administrator');
      }

      if (user.status !== 'active') {
        throw new Error('Account is not active');
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        // Increment failed login attempts
        await connection.execute(
          'UPDATE users SET failed_login_attempts = failed_login_attempts + 1 WHERE id = ?',
          [user.id]
        );

        // Lock account after 5 failed attempts
        if (user.failed_login_attempts >= 4) {
          await connection.execute(
            'UPDATE users SET status = ? WHERE id = ?',
            ['locked', user.id]
          );
        }

        throw new Error('Invalid credentials');
      }

      // Reset failed login attempts and update last login
      await connection.execute(
        'UPDATE users SET failed_login_attempts = 0, last_login = NOW() WHERE id = ?',
        [user.id]
      );

      // Get user roles and permissions
      const [roles] = await connection.execute(
        `SELECT r.id, r.name 
         FROM roles r
         INNER JOIN user_roles ur ON r.id = ur.role_id
         WHERE ur.user_id = ?`,
        [user.id]
      );

      const roleIds = roles.map(r => r.id);
      const roleNames = roles.map(r => r.name);

      let permissions = [];
      if (roleIds.length > 0) {
        const placeholders = roleIds.map(() => '?').join(',');
        const [perms] = await connection.execute(
          `SELECT DISTINCT p.name
           FROM permissions p
           INNER JOIN role_permissions rp ON p.id = rp.permission_id
           WHERE rp.role_id IN (${placeholders})`,
          roleIds
        );
        permissions = perms.map(p => p.name);
      }

      // Create audit log
      await auditService.log(connection, {
        tenantId: tenant.id,
        userId: user.id,
        action: 'auth.login',
        entityType: 'user',
        entityId: user.id,
        ipAddress,
        userAgent
      });

      // Generate JWT token
      const token = jwt.sign(
        {
          userId: user.id,
          tenantId: tenant.id,
          email: user.email,
          roles: roleNames,
          permissions
        },
        config.jwtSecret,
        { expiresIn: config.jwtExpiresIn }
      );

      return {
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          tenantId: tenant.id,
          tenantName: tenant.name,
          roles: roleNames,
          permissions
        }
      };
    } finally {
      connection.release();
    }
  }

  /**
   * Validate token and get user info
   */
  async validateToken(token) {
    try {
      const decoded = jwt.verify(token, config.jwtSecret);
      return decoded;
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  /**
   * Change user password
   */
  async changePassword(userId, oldPassword, newPassword, ipAddress, userAgent) {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      // Get current user
      const [users] = await connection.execute(
        'SELECT id, tenant_id, password FROM users WHERE id = ?',
        [userId]
      );

      if (users.length === 0) {
        throw new Error('User not found');
      }

      const user = users[0];

      // Verify old password
      const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isPasswordValid) {
        throw new Error('Current password is incorrect');
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, config.bcryptRounds);

      // Update password
      await connection.execute(
        'UPDATE users SET password = ? WHERE id = ?',
        [hashedPassword, userId]
      );

      // Create audit log
      await auditService.log(connection, {
        tenantId: user.tenant_id,
        userId: userId,
        action: 'auth.change_password',
        entityType: 'user',
        entityId: userId,
        ipAddress,
        userAgent
      });

      await connection.commit();
      return true;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
}

module.exports = new AuthService();
