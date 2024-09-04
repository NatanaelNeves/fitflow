import React, { useState } from 'react';
import api from '../services/api';

const AddGymPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleAddGym = async (e) => {
    e.preventDefault();
    try {
      const newGym = {
        name,
        description,
        capacity: parseInt(capacity),
      };
      const response = await api.post('/gyms', newGym);
      console.log('Academia adicionada com sucesso:', response.data);
      // Redirecionar ou atualizar a página após adicionar a academia
    } catch (error) {
      console.error('Erro ao adicionar academia:', error);
    }
  };

  return (
    <div>
      <h1>Adicionar Nova Academia</h1>
      <form onSubmit={handleAddGym}>
        <input
          type="text"
          placeholder="Nome da Academia"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Capacidade"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <button type="submit">Adicionar Academia</button>
      </form>
    </div>
  );
};

export default AddGymPage;
