import React, { useState } from 'react';
import api from '../services/api';
const AddGym = ({ onGymAdded }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newGym = { name, location, capacity };
      const response = await api.post('/gyms', newGym);
      onGymAdded(response.data); // Atualiza a lista de academias
      setName('');
      setLocation('');
      setCapacity('');
    } catch (error) {
      console.error('Erro ao adicionar academia:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nome da Academia" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Localização" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Capacidade" 
        value={capacity} 
        onChange={(e) => setCapacity(e.target.value)} 
      />
      <button type="submit">Adicionar Academia</button>
    </form>
  );
};

export default AddGym
