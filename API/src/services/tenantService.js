const { pool } = require('../config/database');
const auditService = require('./auditService');

class TenantService {
  /**
   * Get all tenants (with pagination)
   */
  async getAllTenants(page = 1, limit = 10, status = null) {
    const connection = await pool.getConnection();
    
    try {
      const offset = (page - 1) * limit;
      
      let query = 'SELECT * FROM tenants';
      let countQuery = 'SELECT COUNT(*) as total FROM tenants';
      const params = [];
      
      if (status) {
        query += ' WHERE status = ?';
        countQuery += ' WHERE status = ?';
        params.push(status);
      }
      
      query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
      params.push(limit, offset);
      
      const [tenants] = await connection.execute(query, params);
      const [countResult] = await connection.execute(countQuery, status ? [status] : []);
      
      return {
        tenants,
        pagination: {
          total: countResult[0].total,
          page,
          limit,
          totalPages: Math.ceil(countResult[0].total / limit)
        }
      };
    } finally {
      connection.release();
    }
  }

  /**
   * Get tenant by ID
   */
  async getTenantById(tenantId) {
    const connection = await pool.getConnection();
    
    try {
      const [tenants] = await connection.execute(
        'SELECT * FROM tenants WHERE id = ?',
        [tenantId]
      );

      if (tenants.length === 0) {
        throw new Error('Tenant not found');
      }

      return tenants[0];
    } finally {
      connection.release();
    }
  }

  /**
   * Get tenant by slug
   */
  async getTenantBySlug(slug) {
    const connection = await pool.getConnection();
    
    try {
      const [tenants] = await connection.execute(
        'SELECT * FROM tenants WHERE slug = ?',
        [slug]
      );

      if (tenants.length === 0) {
        throw new Error('Tenant not found');
      }

      return tenants[0];
    } finally {
      connection.release();
    }
  }

  /**
   * Create new tenant
   */
  async createTenant(tenantData, userId, ipAddress, userAgent) {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      const { name, slug, email, phone, address, logoUrl, primaryColor, secondaryColor } = tenantData;

      // Check if slug already exists
      const [existingTenants] = await connection.execute(
        'SELECT id FROM tenants WHERE slug = ?',
        [slug]
      );

      if (existingTenants.length > 0) {
        throw new Error('Tenant with this slug already exists');
      }

      // Insert tenant
      const [result] = await connection.execute(
        `INSERT INTO tenants (name, slug, email, phone, address, logo_url, primary_color, secondary_color, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active')`,
        [
          name,
          slug,
          email,
          phone || null,
          address || null,
          logoUrl || null,
          primaryColor || '#3B82F6',
          secondaryColor || '#10B981'
        ]
      );

      const tenantId = result.insertId;

      // Create default roles for the new tenant
      const defaultRoles = [
        { name: 'Super Admin', description: 'Full system access with all permissions', isSystemRole: true },
        { name: 'Admin', description: 'Administrative access to manage users and settings', isSystemRole: true },
        { name: 'User', description: 'Standard user access', isSystemRole: true }
      ];

      for (const role of defaultRoles) {
        await connection.execute(
          'INSERT INTO roles (tenant_id, name, description, is_system_role) VALUES (?, ?, ?, ?)',
          [tenantId, role.name, role.description, role.isSystemRole]
        );
      }

      // Create audit log
      await auditService.log(connection, {
        tenantId: tenantId,
        userId: userId,
        action: 'tenant.create',
        entityType: 'tenant',
        entityId: tenantId,
        newValues: { name, slug, email },
        ipAddress,
        userAgent
      });

      await connection.commit();

      return {
        id: tenantId,
        name,
        slug,
        email
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  /**
   * Update tenant
   */
  async updateTenant(tenantId, updateData, userId, ipAddress, userAgent) {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      // Get current tenant data for audit
      const [currentTenant] = await connection.execute(
        'SELECT * FROM tenants WHERE id = ?',
        [tenantId]
      );

      if (currentTenant.length === 0) {
        throw new Error('Tenant not found');
      }

      const oldValues = currentTenant[0];

      // Build update query
      const fields = [];
      const values = [];

      if (updateData.name !== undefined) {
        fields.push('name = ?');
        values.push(updateData.name);
      }
      if (updateData.email !== undefined) {
        fields.push('email = ?');
        values.push(updateData.email);
      }
      if (updateData.phone !== undefined) {
        fields.push('phone = ?');
        values.push(updateData.phone);
      }
      if (updateData.address !== undefined) {
        fields.push('address = ?');
        values.push(updateData.address);
      }
      if (updateData.status !== undefined) {
        fields.push('status = ?');
        values.push(updateData.status);
      }
      if (updateData.logoUrl !== undefined) {
        fields.push('logo_url = ?');
        values.push(updateData.logoUrl);
      }
      if (updateData.primaryColor !== undefined) {
        fields.push('primary_color = ?');
        values.push(updateData.primaryColor);
      }
      if (updateData.secondaryColor !== undefined) {
        fields.push('secondary_color = ?');
        values.push(updateData.secondaryColor);
      }

      if (fields.length === 0) {
        throw new Error('No fields to update');
      }

      values.push(tenantId);

      await connection.execute(
        `UPDATE tenants SET ${fields.join(', ')} WHERE id = ?`,
        values
      );

      // Create audit log
      await auditService.log(connection, {
        tenantId: tenantId,
        userId: userId,
        action: 'tenant.update',
        entityType: 'tenant',
        entityId: tenantId,
        oldValues: oldValues,
        newValues: updateData,
        ipAddress,
        userAgent
      });

      await connection.commit();

      return await this.getTenantById(tenantId);
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  /**
   * Delete tenant (soft delete by changing status)
   */
  async deleteTenant(tenantId, userId, ipAddress, userAgent) {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      // Get current tenant data for audit
      const [currentTenant] = await connection.execute(
        'SELECT * FROM tenants WHERE id = ?',
        [tenantId]
      );

      if (currentTenant.length === 0) {
        throw new Error('Tenant not found');
      }

      // Soft delete - change status to inactive
      await connection.execute(
        'UPDATE tenants SET status = ? WHERE id = ?',
        ['inactive', tenantId]
      );

      // Create audit log
      await auditService.log(connection, {
        tenantId: tenantId,
        userId: userId,
        action: 'tenant.delete',
        entityType: 'tenant',
        entityId: tenantId,
        oldValues: currentTenant[0],
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

  /**
   * Update tenant branding
   */
  async updateBranding(tenantId, brandingData, userId, ipAddress, userAgent) {
    const connection = await pool.getConnection();
    
    try {
      await connection.beginTransaction();

      const { logoUrl, primaryColor, secondaryColor } = brandingData;

      const fields = [];
      const values = [];

      if (logoUrl !== undefined) {
        fields.push('logo_url = ?');
        values.push(logoUrl);
      }
      if (primaryColor !== undefined) {
        fields.push('primary_color = ?');
        values.push(primaryColor);
      }
      if (secondaryColor !== undefined) {
        fields.push('secondary_color = ?');
        values.push(secondaryColor);
      }

      if (fields.length === 0) {
        throw new Error('No branding fields to update');
      }

      values.push(tenantId);

      await connection.execute(
        `UPDATE tenants SET ${fields.join(', ')} WHERE id = ?`,
        values
      );

      // Create audit log
      await auditService.log(connection, {
        tenantId: tenantId,
        userId: userId,
        action: 'tenant.update_branding',
        entityType: 'tenant',
        entityId: tenantId,
        newValues: brandingData,
        ipAddress,
        userAgent
      });

      await connection.commit();

      return await this.getTenantById(tenantId);
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }
}

module.exports = new TenantService();
