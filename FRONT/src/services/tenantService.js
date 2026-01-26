import apiClient from './api';

class TenantService {
  async getAllTenants(page = 1, limit = 10, status = null) {
    const params = { page, limit };
    if (status) params.status = status;
    
    const response = await apiClient.get('/tenants', { params });
    return response;
  }

  async getTenantById(id) {
    const response = await apiClient.get(`/tenants/${id}`);
    return response;
  }

  async getTenantBySlug(slug) {
    const response = await apiClient.get(`/tenants/slug/${slug}`);
    return response;
  }

  async createTenant(tenantData) {
    const response = await apiClient.post('/tenants', tenantData);
    return response;
  }

  async updateTenant(id, tenantData) {
    const response = await apiClient.put(`/tenants/${id}`, tenantData);
    return response;
  }

  async deleteTenant(id) {
    const response = await apiClient.delete(`/tenants/${id}`);
    return response;
  }

  async updateBranding(id, brandingData) {
    const response = await apiClient.put(`/tenants/${id}/branding`, brandingData);
    return response;
  }
}

export default new TenantService();
