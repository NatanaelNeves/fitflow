import React, { useState } from 'react';
import api from '../services/api';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { username, password };
      await api.post('/users/register', newUser);
      setUsername('');
      setPassword('');
      // Redirecionar ou exibir mensagem de sucesso
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nome de Usuário" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Senha" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default UserRegistration;
