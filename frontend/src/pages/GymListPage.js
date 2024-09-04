import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const GymListPage = () => {
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
      <h1>Academias Próximas</h1>
      <ul>
        {gyms.map(gym => (
          <li key={gym._id}>
            <Link to={`/gyms/${gym._id}`}>{gym.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/gyms/add">
          <button>Adicionar Nova Academia</button>
        </Link>
      </div>
    </div>
  );
};

export default GymListPage;
