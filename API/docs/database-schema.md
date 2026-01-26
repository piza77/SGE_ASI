# Database Schema Documentation - SGE ASI

## Overview

This document describes the database schema for the SGE ASI ERP system. The database uses MySQL 8.0+ with InnoDB engine for transaction support and foreign key constraints.

## Architecture

The database follows a **multitenant architecture** where all data is isolated by `tenant_id`. This allows multiple companies/clients to use the same system while keeping their data completely separate.

## Core Tables

### tenants
Stores information about each tenant (company/client) using the system.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| name | VARCHAR(255) | Tenant name |
| subdomain | VARCHAR(100) | Unique subdomain for tenant |
| logo | VARCHAR(500) | Logo URL |
| primary_color | VARCHAR(7) | Branding color (hex) |
| is_active | BOOLEAN | Tenant status |
| config | JSON | Configuration settings |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

### users
Stores user accounts. Each user belongs to a tenant.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| email | VARCHAR(255) | User email (unique per tenant) |
| password | VARCHAR(255) | Hashed password |
| name | VARCHAR(255) | User full name |
| role | VARCHAR(50) | User role (admin, user, etc.) |
| is_active | BOOLEAN | Account status |
| last_login | TIMESTAMP | Last login timestamp |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

**Indexes:**
- `unique_email_tenant` on (email, tenant_id)
- `idx_tenant_id` on tenant_id
- `idx_email` on email
- `idx_role` on role

### audit_logs
Records all important operations for auditing purposes.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| user_id | INT | Foreign key to users |
| action | VARCHAR(100) | Action performed |
| resource | VARCHAR(100) | Resource affected |
| resource_id | INT | ID of affected resource |
| details | JSON | Additional details |
| ip_address | VARCHAR(45) | User IP address |
| created_at | TIMESTAMP | Timestamp of action |

## Module Tables

### Clients Module

#### clients
Stores client information.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| name | VARCHAR(255) | Client name |
| nit | VARCHAR(50) | Tax ID |
| email | VARCHAR(255) | Contact email |
| phone | VARCHAR(50) | Contact phone |
| address | TEXT | Physical address |
| contact_person | VARCHAR(255) | Contact person name |
| is_active | BOOLEAN | Client status |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

### Cost Centers Module

#### cost_centers
Main table for cost centers.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| ide | VARCHAR(100) | Unique identifier (IDE) |
| client_id | INT | Foreign key to clients |
| contract_number | VARCHAR(100) | Contract number |
| identification | VARCHAR(100) | Identification number |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

**Unique constraint:** `unique_ide_tenant` on (ide, tenant_id)

#### cost_categories
Categories within each cost center. 6 default categories are created automatically.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| cost_center_id | INT | Foreign key to cost_centers |
| name | VARCHAR(100) | Category name |
| type | ENUM | Category type (see below) |
| display_order | INT | Display order |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

**Category Types:**
1. `RRHH` - Recursos Humanos
2. `LOGISTICA` - Logística
3. `REEMBOLSABLES` - Reembolsables
4. `CONTRATOS` - Contratos
5. `OTROS` - Otros
6. `IMPREVISTOS` - Imprevistos

#### cost_items
Items within each category.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| category_id | INT | Foreign key to cost_categories |
| implementation_date | DATE | Implementation date |
| start_date | DATE | Start date |
| estimated_end_date | DATE | Estimated end date |
| name | VARCHAR(255) | Item name |
| identification | VARCHAR(100) | Item identification |
| value | DECIMAL(15,2) | Item value |
| observations | TEXT | Additional notes |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

### Inventory Module

#### inventory_items
Catalog of inventory items.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| sku | VARCHAR(100) | Stock Keeping Unit (unique per tenant) |
| name | VARCHAR(255) | Item name |
| description | TEXT | Item description |
| category | VARCHAR(100) | Item category |
| unit | VARCHAR(50) | Unit of measure |
| min_stock | INT | Minimum stock level |
| current_stock | INT | Current stock level |
| location | VARCHAR(255) | Storage location |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

#### inventory_movements
Track all inventory movements.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| item_id | INT | Foreign key to inventory_items |
| type | ENUM | Movement type (IN, OUT, ADJUSTMENT) |
| quantity | INT | Quantity moved |
| reason | VARCHAR(255) | Reason for movement |
| user_id | INT | User who performed movement |
| movement_date | TIMESTAMP | Movement timestamp |

### Employees Module

#### employees
Employee information linked to user accounts.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| user_id | INT | Foreign key to users (optional) |
| identification | VARCHAR(50) | Employee ID (unique per tenant) |
| position | VARCHAR(100) | Job position |
| department | VARCHAR(100) | Department |
| hire_date | DATE | Hire date |
| salary | DECIMAL(15,2) | Salary |
| is_active | BOOLEAN | Employment status |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

### Suppliers Module

#### suppliers
Supplier/vendor information.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| name | VARCHAR(255) | Supplier name |
| nit | VARCHAR(50) | Tax ID |
| email | VARCHAR(255) | Contact email |
| phone | VARCHAR(50) | Contact phone |
| address | TEXT | Physical address |
| contact_person | VARCHAR(255) | Contact person name |
| category | VARCHAR(100) | Supplier category |
| is_active | BOOLEAN | Supplier status |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

### Portfolio Module

#### invoices
Invoice management.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| client_id | INT | Foreign key to clients |
| invoice_number | VARCHAR(50) | Invoice number (unique per tenant) |
| invoice_date | DATE | Invoice date |
| due_date | DATE | Payment due date |
| subtotal | DECIMAL(15,2) | Subtotal amount |
| tax | DECIMAL(15,2) | Tax amount |
| total | DECIMAL(15,2) | Total amount |
| status | ENUM | Invoice status (see below) |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

**Invoice Status:**
- `DRAFT` - Draft invoice
- `PENDING` - Awaiting payment
- `PAID` - Fully paid
- `OVERDUE` - Past due date
- `CANCELLED` - Cancelled

### Documents Module

#### documents
Document management system.

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key |
| tenant_id | INT | Foreign key to tenants |
| name | VARCHAR(255) | Document name |
| description | TEXT | Document description |
| type | VARCHAR(100) | Document type |
| category | VARCHAR(100) | Document category |
| tags | JSON | Document tags (array) |
| metadata | JSON | Additional metadata |
| created_by | INT | Foreign key to users |
| created_at | TIMESTAMP | Creation date |
| updated_at | TIMESTAMP | Last update date |

## Relationships

### Key Relationships

```
tenants (1) ─── (N) users
tenants (1) ─── (N) clients
tenants (1) ─── (N) cost_centers
tenants (1) ─── (N) inventory_items
tenants (1) ─── (N) employees
tenants (1) ─── (N) suppliers
tenants (1) ─── (N) invoices
tenants (1) ─── (N) documents

clients (1) ─── (N) cost_centers
cost_centers (1) ─── (N) cost_categories
cost_categories (1) ─── (N) cost_items

inventory_items (1) ─── (N) inventory_movements

users (1) ─── (1) employees
```

## Indexes

All tables have indexes on:
- Primary keys (automatic)
- Foreign keys (for join performance)
- Frequently queried columns (tenant_id, status fields, etc.)

## Data Integrity

### Foreign Key Constraints

- `ON DELETE CASCADE` - When parent is deleted, children are deleted
- `ON DELETE RESTRICT` - Prevents deletion if children exist
- `ON DELETE SET NULL` - Sets foreign key to NULL when parent is deleted

### Unique Constraints

Most business identifiers (email, SKU, IDE, etc.) are unique **per tenant** to maintain data integrity within each tenant's scope.

## Multitenant Isolation

Every query must filter by `tenant_id` to ensure data isolation. The API middleware automatically adds this filter to all queries.

Example:
```sql
-- Bad (returns all cost centers)
SELECT * FROM cost_centers;

-- Good (returns only tenant's cost centers)
SELECT * FROM cost_centers WHERE tenant_id = ?;
```

## Seed Data

The initialization script includes:
1. Default tenant: "ASI Consultora"
2. Default admin user: admin@asi.com (password: admin123)

**Important:** Change the default admin password in production!

## Backup Strategy

Recommended backup approach:
1. Daily full backups
2. Transaction log backups every 15 minutes
3. Keep backups for 30 days
4. Test restore procedures monthly

## Performance Considerations

1. **Indexes** - All foreign keys and frequently queried columns have indexes
2. **Partitioning** - Consider partitioning audit_logs by date for large datasets
3. **Archiving** - Archive old audit_logs periodically
4. **Connection Pooling** - Use connection pooling (configured in Sequelize)

## Migration Strategy

For schema changes:
1. Create migration scripts in `database/migrations/`
2. Test in development environment
3. Run migrations in staging
4. Schedule maintenance window for production
5. Take backup before running migrations
6. Run migrations with rollback plan ready

## Security

1. **Passwords** - Always hashed with bcrypt (cost factor 10)
2. **SQL Injection** - Prevented by using Sequelize ORM with parameterized queries
3. **Access Control** - All queries filtered by tenant_id
4. **Audit Trail** - All critical operations logged in audit_logs

## Future Enhancements

Tables to be added in future versions:
- `contracts` - Client contracts
- `projects` - Project management
- `timesheets` - Employee time tracking
- `training` - Employee training records
- `purchase_orders` - Purchase order management
- `payments` - Payment transactions
- `cash_flow` - Cash flow records
- `document_versions` - Document version control
