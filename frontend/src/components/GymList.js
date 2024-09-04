import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const GymList = () => {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const response = await api.get('/gyms');
        setGyms(response.data);
      } catch (error) {
        console.error('Erro ao buscar academias:', error);
      }
    };

    fetchGyms();
  }, []);

  return (
    <div>
      <h2>Lista de Academias</h2>
      <ul>
        {gyms.map(gym => (
          <li key={gym._id}>
            <Link to={`/gyms/${gym._id}`}>{gym.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GymList;

