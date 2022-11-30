const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndRemove(userId);
    res.json({ message: 'User removed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
