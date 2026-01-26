class AuditService {
  /**
   * Create an audit log entry
   * @param {Object} connection - Database connection
   * @param {Object} logData - Log data
   */
  async log(connection, logData) {
    const {
      tenantId,
      userId,
      action,
      entityType,
      entityId,
      oldValues,
      newValues,
      ipAddress,
      userAgent
    } = logData;

    try {
      await connection.execute(
        `INSERT INTO audit_logs 
         (tenant_id, user_id, action, entity_type, entity_id, old_values, new_values, ip_address, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          tenantId,
          userId || null,
          action,
          entityType,
          entityId || null,
          oldValues ? JSON.stringify(oldValues) : null,
          newValues ? JSON.stringify(newValues) : null,
          ipAddress || null,
          userAgent || null
        ]
      );
    } catch (error) {
      // Log the error but don't throw - audit logging shouldn't break the main operation
      console.error('Audit logging error:', error.message);
    }
  }

  /**
   * Get audit logs with filters
   */
  async getAuditLogs(filters = {}, page = 1, limit = 50) {
    const { pool } = require('../config/database');
    const connection = await pool.getConnection();
    
    try {
      const offset = (page - 1) * limit;
      const conditions = [];
      const params = [];

      if (filters.tenantId) {
        conditions.push('tenant_id = ?');
        params.push(filters.tenantId);
      }

      if (filters.userId) {
        conditions.push('user_id = ?');
        params.push(filters.userId);
      }

      if (filters.action) {
        conditions.push('action = ?');
        params.push(filters.action);
      }

      if (filters.entityType) {
        conditions.push('entity_type = ?');
        params.push(filters.entityType);
      }

      if (filters.entityId) {
        conditions.push('entity_id = ?');
        params.push(filters.entityId);
      }

      if (filters.startDate) {
        conditions.push('created_at >= ?');
        params.push(filters.startDate);
      }

      if (filters.endDate) {
        conditions.push('created_at <= ?');
        params.push(filters.endDate);
      }

      const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

      const [logs] = await connection.execute(
        `SELECT al.*, 
                u.email as user_email, 
                u.first_name, 
                u.last_name
         FROM audit_logs al
         LEFT JOIN users u ON al.user_id = u.id
         ${whereClause}
         ORDER BY al.created_at DESC
         LIMIT ? OFFSET ?`,
        [...params, limit, offset]
      );

      const [countResult] = await connection.execute(
        `SELECT COUNT(*) as total FROM audit_logs ${whereClause}`,
        params
      );

      return {
        logs,
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
}

module.exports = new AuditService();
