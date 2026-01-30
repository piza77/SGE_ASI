import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import api from './api'; // Configuración de Axios

// Llamada de prueba al backend
const fetchTenants = async () => {
  try {
    const response = await api.get('/api/tenants');
    console.log('Tenants:', response.data); // Imprime los resultados en la consola
  } catch (error) {
    console.error('Error fetching tenants:', error.message);
  }
};

fetchTenants();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);