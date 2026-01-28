<<<<<<< HEAD
import api from './api';

/**
 * Servicio de autenticación
 */

export const authService = {
  /**
   * Iniciar sesión
   * @param {Object} credentials - Email y contraseña
   * @returns {Promise} Respuesta con token y datos de usuario
   */
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  /**
   * Registrar nuevo usuario
   * @param {Object} userData - Datos del usuario
   * @returns {Promise} Respuesta con usuario creado
   */
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  /**
   * Cerrar sesión
   */
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('tenantId');
  },

  /**
   * Obtener usuario actual
   * @returns {Promise} Datos del usuario
   */
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  /**
   * Refrescar token
   * @returns {Promise} Nuevo token
   */
  refreshToken: async () => {
    const response = await api.post('/auth/refresh');
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  /**
   * Recuperar contraseña
   * @param {string} email - Email del usuario
   * @returns {Promise} Respuesta
   */
  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },

  /**
   * Resetear contraseña
   * @param {Object} data - Token y nueva contraseña
   * @returns {Promise} Respuesta
   */
  resetPassword: async (data) => {
    const response = await api.post('/auth/reset-password', data);
    return response.data;
  },
};

export default authService;
=======
import apiClient from './api';

class AuthService {
  setAuthToken(token) {
    if (token) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete apiClient.defaults.headers.common['Authorization'];
    }
  }

  async login(email, password, tenantSlug) {
    try {
      const response = await apiClient.post('/auth/login', {
        email,
        password,
        tenantSlug
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const response = await apiClient.get('/auth/me');
      return response;
    } catch (error) {
      throw error;
    }
  }

  async changePassword(oldPassword, newPassword) {
    try {
      const response = await apiClient.post('/auth/change-password', {
        oldPassword,
        newPassword
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async validateToken(token) {
    try {
      const response = await apiClient.post('/auth/validate', { token });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
>>>>>>> origin/copilot/complete-authentication-and-tenants
