const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const workoutPlanRoutes = require('./routes/workoutPlanRoutes');
const gymRoutes = require('./routes/gymRoutes');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/workout-plans', workoutPlanRoutes);
app.use('/api/gyms', gymRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


