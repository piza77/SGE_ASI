/**
 * Middleware para validar el tenant en peticiones multitenant
 */
const validateTenant = async (req, res, next) => {
  try {
    // Obtener tenantId del header o del usuario autenticado
    const tenantId = req.headers['x-tenant-id'] || req.user?.tenantId;

    if (!tenantId) {
      return res.status(400).json({
        success: false,
        message: 'Tenant ID no proporcionado',
      });
    }

    // Agregar tenantId al request
    req.tenantId = tenantId;
    
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error al validar tenant',
      error: error.message,
    });
  }
};

/**
 * Middleware para agregar filtro de tenant en queries
 */
const addTenantFilter = (req, res, next) => {
  if (req.tenantId) {
    // Agregar filtro de tenant a la query
    req.query.tenantId = req.tenantId;
  }
  next();
};

module.exports = {
  validateTenant,
  addTenantFilter,
};
