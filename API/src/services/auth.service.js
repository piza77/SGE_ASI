const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Tenant = require('../models/Tenant');

/**
 * Servicio de autenticación
 */
class AuthService {
  /**
   * Registrar nuevo usuario
   */
  async register(userData) {
    const { email, password, firstName, lastName, tenantId } = userData;

    // Verificar si el email ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      const error = new Error('El email ya está registrado');
      error.statusCode = 409;
      throw error;
    }

    // Verificar que el tenant existe
    const tenant = await Tenant.findByPk(tenantId);
    if (!tenant) {
      const error = new Error('Tenant no encontrado');
      error.statusCode = 404;
      throw error;
    }

    // Crear usuario
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      tenantId,
      role: 'user',
    });

    // Remover password del objeto
    const userObj = user.toJSON();
    delete userObj.password;

    return userObj;
  }

  /**
   * Iniciar sesión
   */
  async login(email, password) {
    // Buscar usuario por email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      const error = new Error('Credenciales inválidas');
      error.statusCode = 401;
      throw error;
    }

    // Verificar contraseña
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      const error = new Error('Credenciales inválidas');
      error.statusCode = 401;
      throw error;
    }

    // Verificar si el usuario está activo
    if (!user.isActive) {
      const error = new Error('Usuario inactivo');
      error.statusCode = 403;
      throw error;
    }

    // Actualizar último login
    await user.update({ lastLogin: new Date() });

    // Generar token JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        tenantId: user.tenantId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE || '24h',
      }
    );

    // Remover password del objeto
    const userObj = user.toJSON();
    delete userObj.password;

    return {
      user: userObj,
      token,
    };
  }

  /**
   * Obtener usuario por ID
   */
  async getUserById(userId) {
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      const error = new Error('Usuario no encontrado');
      error.statusCode = 404;
      throw error;
    }

    return user;
  }
}

module.exports = new AuthService();
