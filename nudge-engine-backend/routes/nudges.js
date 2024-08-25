const express = require('express');
const Nudge = require('../models/Nudge');

const router = express.Router();

// Get all nudges
router.get('/', async (req, res) => {
  try {
    const nudges = await Nudge.find();
    res.json(nudges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new nudge
router.post('/', async (req, res) => {
  const nudge = new Nudge({
    message: req.body.message,
    user: req.body.user,
  });

  try {
    const newNudge = await nudge.save();
    res.status(201).json(newNudge);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
