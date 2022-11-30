const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, age } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, { name, email, age }, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
