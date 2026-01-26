const jwt = require('jsonwebtoken');
<<<<<<< HEAD

/**
 * Middleware para verificar el token JWT
 */
const auth = async (req, res, next) => {
  try {
    // Obtener token del header Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Token no proporcionado',
      });
    }

    const token = authHeader.substring(7); // Remover 'Bearer '

    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Agregar información del usuario al request
    req.user = decoded;
    req.userId = decoded.id;
    req.userRole = decoded.role;
    
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expirado',
      });
    }
    
    return res.status(401).json({
      success: false,
      message: 'Token inválido',
=======
const config = require('../config/config');

/**
 * Middleware to verify JWT token and attach user info to request
 */
const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token is required'
      });
    }

    jwt.verify(token, config.jwtSecret, (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Invalid or expired token'
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Authentication error',
      error: error.message
>>>>>>> origin/copilot/complete-authentication-and-tenants
    });
  }
};

/**
<<<<<<< HEAD
 * Middleware para verificar roles
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'No autenticado',
      });
    }

    if (!roles.includes(req.userRole)) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permisos para realizar esta acción',
      });
    }

    next();
=======
 * Middleware to check if user has required permission
 */
const checkPermission = (requiredPermission) => {
  return (req, res, next) => {
    try {
      const userPermissions = req.user.permissions || [];
      
      if (!userPermissions.includes(requiredPermission)) {
        return res.status(403).json({
          success: false,
          message: 'Insufficient permissions',
          required: requiredPermission
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Permission check error',
        error: error.message
      });
    }
  };
};

/**
 * Middleware to check if user has any of the required roles
 */
const checkRole = (requiredRoles) => {
  return (req, res, next) => {
    try {
      const userRoles = req.user.roles || [];
      const hasRole = requiredRoles.some(role => userRoles.includes(role));

      if (!hasRole) {
        return res.status(403).json({
          success: false,
          message: 'Insufficient role privileges',
          required: requiredRoles
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Role check error',
        error: error.message
      });
    }
>>>>>>> origin/copilot/complete-authentication-and-tenants
  };
};

module.exports = {
<<<<<<< HEAD
  auth,
  authorize,
=======
  authenticateToken,
  checkPermission,
  checkRole
>>>>>>> origin/copilot/complete-authentication-and-tenants
};
