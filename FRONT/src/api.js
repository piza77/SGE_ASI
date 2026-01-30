import axios from 'axios';

// Configuración de Axios con la URL base del backend
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Toma la URL configurada en .env
  timeout: 10000, // Tiempo límite de las peticiones
});

export default api;