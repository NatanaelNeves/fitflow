import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const GymDetailPage = () => {
  const { id } = useParams();
  const [gym, setGym] = useState(null);

  useEffect(() => {
    const fetchGym = async () => {
      try {
        const response = await api.get(`/gyms/${id}`);
        setGym(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes da academia:', error);
      }
    };

    fetchGym();
  }, [id]);

  if (!gym) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{gym.name}</h1>
      <p>{gym.description}</p>
      <p>Lotação Atual: {gym.currentOccupancy}</p>
    </div>
  );
};

export default GymDetailPage;

