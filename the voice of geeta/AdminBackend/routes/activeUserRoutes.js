import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Route to fetch all users
router.get('/active-users', async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'password'], // explicitly select fields if needed
    });

    if (users.length > 0) {
      return res.json(users);
    } else {
      return res.status(404).json({ message: 'No users found' });
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
