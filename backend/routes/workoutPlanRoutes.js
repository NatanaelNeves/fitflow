const express = require('express');
const { getWorkoutPlans, addWorkoutPlan } = require('../controllers/workoutPlanController');
const router = express.Router();

router.get('/', getWorkoutPlans);
router.post('/', addWorkoutPlan);

module.exports = router;
