import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bem-vindo ao FitFlow Solutions!</h1>
      <p>Gerencie suas academias favoritas e veja sua lotação em tempo real.</p>
      <div>
        <Link to="/login">Login</Link> | <Link to="/register">Registrar</Link>
      </div>
      <div>
        <Link to="/gyms">
          <button>Ver Lista de Academias</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

