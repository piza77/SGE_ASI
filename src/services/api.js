import axios from 'axios';

<<<<<<< HEAD
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
=======
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
>>>>>>> origin/copilot/complete-authentication-and-tenants
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    
    // Agregar tenantId si existe
    const tenantId = localStorage.getItem('tenantId');
    if (tenantId) {
      config.headers['X-Tenant-ID'] = tenantId;
    }
    
=======
>>>>>>> origin/copilot/create-erp-module-structure
=======
>>>>>>> origin/copilot/complete-authentication-and-tenants
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

<<<<<<< HEAD
<<<<<<< HEAD
// Interceptor para manejar respuestas y errores
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
=======
// Response interceptor to handle errors
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - logout user
>>>>>>> origin/copilot/complete-authentication-and-tenants
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
<<<<<<< HEAD
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
=======
  }
);

export default apiClient;
>>>>>>> origin/copilot/complete-authentication-and-tenants
