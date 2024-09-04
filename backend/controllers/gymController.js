const Gym = require('../models/gymModel');

// Obter todas as academias
const getGyms = async (req, res) => {
  const gyms = await Gym.find({});
  res.json(gyms);
};

// Adicionar uma nova academia
const addGym = async (req, res) => {
  const { name, location, capacity } = req.body;
  const gym = new Gym({ name, location, capacity });
  await gym.save();
  res.status(201).json(gym);
};

module.exports = { getGyms, addGym };
