import axios from 'axios';

<<<<<<< HEAD
// Configuración base de Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
=======
/**
 * Axios instance configured for API calls
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
>>>>>>> origin/copilot/create-erp-module-structure
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

<<<<<<< HEAD
// Interceptor para agregar el token JWT en cada petición
=======
/**
 * Request interceptor to add auth token
 */
>>>>>>> origin/copilot/create-erp-module-structure
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
<<<<<<< HEAD
    
    // Agregar tenantId si existe
    const tenantId = localStorage.getItem('tenantId');
    if (tenantId) {
      config.headers['X-Tenant-ID'] = tenantId;
    }
    
=======
>>>>>>> origin/copilot/create-erp-module-structure
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
// Interceptor para manejar respuestas y errores
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
=======
/**
 * Response interceptor to handle errors
 */
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    return Promise.reject(error.response?.data || error);
>>>>>>> origin/copilot/create-erp-module-structure
  }
);

export default api;
