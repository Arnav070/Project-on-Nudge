const mongoose = require('mongoose');

const NudgeSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Nudge', NudgeSchema);
