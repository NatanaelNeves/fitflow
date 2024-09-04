const mongoose = require('mongoose');

const gymSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  currentOccupancy: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const Gym = mongoose.model('Gym', gymSchema);

module.exports = Gym;

