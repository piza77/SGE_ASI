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
    const response = await apiClient.post('/auth/login', {
      email,
      password,
      tenantSlug
    });
    return response;
  }

  async register(userData) {
    const response = await apiClient.post('/auth/register', userData);
    return response;
  }

  async getCurrentUser() {
    const response = await apiClient.get('/auth/me');
    return response;
  }

  async changePassword(oldPassword, newPassword) {
    const response = await apiClient.post('/auth/change-password', {
      oldPassword,
      newPassword
    });
    return response;
  }

  async validateToken(token) {
    const response = await apiClient.post('/auth/validate', { token });
    return response;
  }
}

export default new AuthService();
