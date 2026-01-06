/**
 * Middleware to filter data by tenant
 */
const tenantFilter = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }

  // Add tenantId to request for filtering
  req.tenantId = req.user.tenantId;
  next();
};

/**
 * Add tenant filter to query options
 */
const addTenantFilter = (req, options = {}) => {
  if (!req.tenantId) {
    throw new Error('Tenant ID not found in request');
  }

  return {
    ...options,
    where: {
      ...(options.where || {}),
      tenantId: req.tenantId
    }
  };
};

module.exports = {
  tenantFilter,
  addTenantFilter
};
