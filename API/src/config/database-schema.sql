-- Database Schema for SGE ASI ERP - Multitenant System

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS sge_asi_erp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sge_asi_erp;

-- ====================================
-- TENANTS TABLE
-- ====================================
CREATE TABLE IF NOT EXISTS tenants (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  address TEXT,
  status ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  
  -- Branding configuration
  logo_url VARCHAR(500),
  primary_color VARCHAR(7) DEFAULT '#3B82F6',
  secondary_color VARCHAR(7) DEFAULT '#10B981',
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_slug (slug),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ====================================
-- ROLES TABLE
-- ====================================
CREATE TABLE IF NOT EXISTS roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tenant_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  is_system_role BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
  UNIQUE KEY unique_tenant_role (tenant_id, name),
  INDEX idx_tenant (tenant_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ====================================
-- PERMISSIONS TABLE
-- ====================================
CREATE TABLE IF NOT EXISTS permissions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  module VARCHAR(50) NOT NULL,
  action VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_module (module),
  INDEX idx_action (action)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ====================================
-- ROLE_PERMISSIONS TABLE (Many-to-Many)
-- ====================================
CREATE TABLE IF NOT EXISTS role_permissions (
  role_id INT NOT NULL,
  permission_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (role_id, permission_id),
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
  FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ====================================
-- USERS TABLE
-- ====================================
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tenant_id INT NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(50),
  status ENUM('active', 'inactive', 'locked') DEFAULT 'active',
  last_login TIMESTAMP NULL,
  failed_login_attempts INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
  UNIQUE KEY unique_tenant_email (tenant_id, email),
  INDEX idx_tenant (tenant_id),
  INDEX idx_email (email),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ====================================
-- USER_ROLES TABLE (Many-to-Many)
-- ====================================
CREATE TABLE IF NOT EXISTS user_roles (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ====================================
-- AUDIT_LOGS TABLE
-- ====================================
CREATE TABLE IF NOT EXISTS audit_logs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tenant_id INT NOT NULL,
  user_id INT,
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50) NOT NULL,
  entity_id INT,
  old_values JSON,
  new_values JSON,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_tenant (tenant_id),
  INDEX idx_user (user_id),
  INDEX idx_action (action),
  INDEX idx_entity (entity_type, entity_id),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ====================================
-- INSERT DEFAULT PERMISSIONS
-- ====================================
INSERT INTO permissions (name, description, module, action) VALUES
-- Authentication permissions
('auth.login', 'Login to the system', 'authentication', 'login'),
('auth.logout', 'Logout from the system', 'authentication', 'logout'),
('auth.register', 'Register new user', 'authentication', 'register'),

-- Tenant permissions
('tenant.view', 'View tenant information', 'tenants', 'view'),
('tenant.create', 'Create new tenant', 'tenants', 'create'),
('tenant.update', 'Update tenant information', 'tenants', 'update'),
('tenant.delete', 'Delete tenant', 'tenants', 'delete'),
('tenant.manage_branding', 'Manage tenant branding', 'tenants', 'manage_branding'),

-- User permissions
('user.view', 'View users', 'users', 'view'),
('user.create', 'Create new user', 'users', 'create'),
('user.update', 'Update user information', 'users', 'update'),
('user.delete', 'Delete user', 'users', 'delete'),

-- Role permissions
('role.view', 'View roles', 'roles', 'view'),
('role.create', 'Create new role', 'roles', 'create'),
('role.update', 'Update role', 'roles', 'update'),
('role.delete', 'Delete role', 'roles', 'delete'),
('role.assign_permissions', 'Assign permissions to role', 'roles', 'assign_permissions'),

-- Audit permissions
('audit.view', 'View audit logs', 'audit', 'view');

-- ====================================
-- INSERT DEFAULT TENANT (Demo)
-- ====================================
INSERT INTO tenants (name, slug, email, phone, status, primary_color, secondary_color) 
VALUES ('Demo Company', 'demo-company', 'demo@example.com', '+1234567890', 'active', '#3B82F6', '#10B981');

-- ====================================
-- INSERT DEFAULT ROLES
-- ====================================
SET @tenant_id = LAST_INSERT_ID();

INSERT INTO roles (tenant_id, name, description, is_system_role) VALUES
(@tenant_id, 'Super Admin', 'Full system access with all permissions', TRUE),
(@tenant_id, 'Admin', 'Administrative access to manage users and settings', TRUE),
(@tenant_id, 'User', 'Standard user access', TRUE);

-- ====================================
-- ASSIGN ALL PERMISSIONS TO SUPER ADMIN
-- ====================================
SET @super_admin_role_id = (SELECT id FROM roles WHERE tenant_id = @tenant_id AND name = 'Super Admin');

INSERT INTO role_permissions (role_id, permission_id)
SELECT @super_admin_role_id, id FROM permissions;

-- ====================================
-- ASSIGN LIMITED PERMISSIONS TO ADMIN
-- ====================================
SET @admin_role_id = (SELECT id FROM roles WHERE tenant_id = @tenant_id AND name = 'Admin');

INSERT INTO role_permissions (role_id, permission_id)
SELECT @admin_role_id, id FROM permissions 
WHERE name IN (
  'auth.login', 'auth.logout',
  'tenant.view', 'tenant.update',
  'user.view', 'user.create', 'user.update',
  'role.view', 'audit.view'
);

-- ====================================
-- ASSIGN BASIC PERMISSIONS TO USER
-- ====================================
SET @user_role_id = (SELECT id FROM roles WHERE tenant_id = @tenant_id AND name = 'User');

INSERT INTO role_permissions (role_id, permission_id)
SELECT @user_role_id, id FROM permissions 
WHERE name IN ('auth.login', 'auth.logout', 'user.view');

-- ====================================
-- CREATE DEFAULT ADMIN USER
-- Password: Admin123! (hashed with bcrypt)
-- Hash generated with: bcrypt.hashSync('Admin123!', 10)
-- ====================================
INSERT INTO users (tenant_id, email, password, first_name, last_name, status) 
VALUES (
  @tenant_id, 
  'admin@demo.com', 
  '$2a$10$N9qo8uLOickgx2ZMRZoMye7VPWp7kqVpKlHPUJ8x8lO9P.qJ5zYvO', 
  'Admin', 
  'User', 
  'active'
);

SET @admin_user_id = LAST_INSERT_ID();

-- Assign Super Admin role to default admin user
INSERT INTO user_roles (user_id, role_id) 
VALUES (@admin_user_id, @super_admin_role_id);
