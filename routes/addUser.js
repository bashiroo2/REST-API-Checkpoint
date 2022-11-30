const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
