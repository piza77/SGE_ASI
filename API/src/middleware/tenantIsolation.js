/**
 * Middleware to ensure tenant isolation
 * Validates that the user can only access resources within their tenant
 */
const tenantIsolation = (req, res, next) => {
  try {
    const userTenantId = req.user.tenantId;
    
    // Check if tenant_id is in request body
    if (req.body && req.body.tenant_id && req.body.tenant_id !== userTenantId) {
      return res.status(403).json({
        success: false,
        message: 'Access denied: Tenant mismatch'
      });
    }

    // Check if tenant_id is in request params
    if (req.params && req.params.tenantId && parseInt(req.params.tenantId) !== userTenantId) {
      return res.status(403).json({
        success: false,
        message: 'Access denied: Tenant mismatch'
      });
    }

    // Check if tenant_id is in request query
    if (req.query && req.query.tenant_id && parseInt(req.query.tenant_id) !== userTenantId) {
      return res.status(403).json({
        success: false,
        message: 'Access denied: Tenant mismatch'
      });
    }

    // Attach tenant ID to request for use in queries
    req.tenantId = userTenantId;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Tenant isolation error',
      error: error.message
    });
  }
};

module.exports = { tenantIsolation };
