const jwt = require('jsonwebtoken');
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
    });
  }
};

/**
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
  };
};

module.exports = {
  authenticateToken,
  checkPermission,
  checkRole
};
