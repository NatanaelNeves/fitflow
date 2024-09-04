const User = require('../models/userModel');

// Registrar um novo usuário
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  // Adicionar lógica para criar usuário
};

// Autenticar usuário
const authUser = async (req, res) => {
  const { email, password } = req.body;
  // Adicionar lógica para autenticar usuário
};

module.exports = { registerUser, authUser };
