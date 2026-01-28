import apiClient from './api';

class TenantService {
  async getAllTenants(page = 1, limit = 10, status = null) {
    try {
      const params = { page, limit };
      if (status) params.status = status;
      
      const response = await apiClient.get('/tenants', { params });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getTenantById(id) {
    try {
      const response = await apiClient.get(`/tenants/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getTenantBySlug(slug) {
    try {
      const response = await apiClient.get(`/tenants/slug/${slug}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createTenant(tenantData) {
    try {
      const response = await apiClient.post('/tenants', tenantData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateTenant(id, tenantData) {
    try {
      const response = await apiClient.put(`/tenants/${id}`, tenantData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteTenant(id) {
    try {
      const response = await apiClient.delete(`/tenants/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateBranding(id, brandingData) {
    try {
      const response = await apiClient.put(`/tenants/${id}/branding`, brandingData);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new TenantService();
