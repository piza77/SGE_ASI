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
