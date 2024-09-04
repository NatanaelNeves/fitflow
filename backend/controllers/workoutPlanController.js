const WorkoutPlan = require('../models/workoutPlanModel');

// Obter todos os planos de treino
const getWorkoutPlans = async (req, res) => {
  const plans = await WorkoutPlan.find({ user: req.user._id });
  res.json(plans);
};

// Adicionar um novo plano de treino
const addWorkoutPlan = async (req, res) => {
  const { title, description, exercises } = req.body;
  const plan = new WorkoutPlan({ title, description, exercises, user: req.user._id });
  await plan.save();
  res.status(201).json(plan);
};

module.exports = { getWorkoutPlans, addWorkoutPlan };
