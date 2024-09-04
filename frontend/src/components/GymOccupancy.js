import React, { useEffect, useState } from 'react';
import api from '../services/api';

const GymOccupancy = () => {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await api.get('/gyms');
        setGyms(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados das academias:', error);
      }
    };

    fetchGyms();
    
    // Para atualização em tempo real, podemos usar WebSockets ou polling
    const interval = setInterval(fetchGyms, 5000); // Atualiza a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Ocupação Atual das Academias</h2>
      <ul>
        {gyms.map(gym => (
          <li key={gym._id}>
            <strong>{gym.name}</strong> - {gym.currentOccupancy}/{gym.capacity} pessoas
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GymOccupancy;
