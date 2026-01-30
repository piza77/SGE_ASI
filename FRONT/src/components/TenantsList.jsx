import React, { useState, useEffect } from 'react';
import api from '../api'; // Asegúrate de que el archivo de Axios esté configurado correctamente

const TenantsList = () => {
  const [tenants, setTenants] = useState([]); // Estado para almacenar los tenants

  useEffect(() => {
    // Llamada al backend al montar el componente
    const fetchTenants = async () => {
      try {
        const response = await api.get('/api/tenants');
        setTenants(response.data); // Almacena la respuesta en el estado
      } catch (error) {
        console.error('Error fetching tenants:', error.message);
      }
    };

    fetchTenants();
  }, []); // El arreglo vac��o significa que solo se ejecutará una vez al montar el componente

  return (
    <div>
      <h1>Lista de Tenants</h1>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>{tenant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TenantsList;