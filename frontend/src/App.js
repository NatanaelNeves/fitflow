import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GymListPage from './pages/GymListPage';
import GymDetailPage from './pages/GymDetailPage';
import AddGymPage from './pages/AddGymPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/gyms" element={<GymListPage />} />
        <Route path="/gyms/:id" element={<GymDetailPage />} />
        <Route path="/gyms/add" element={<AddGymPage />} />
      </Routes>
    </Router>
  );
}

export default App;


