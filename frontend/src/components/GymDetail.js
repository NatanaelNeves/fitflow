import React from 'react';

const GymDetail = ({ gym }) => {
  return (
    <div>
      <p>Lotação Atual: {gym.currentOccupancy} / {gym.maxCapacity}</p>
      <p>Descrição: {gym.description}</p>
      <p>Endereço: {gym.address}</p>
      <p>Telefone: {gym.phone}</p>
      <p>Email: {gym.email}</p>
      
    </div>
  );
};

export default GymDetail;

