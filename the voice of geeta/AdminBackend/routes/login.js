import User from '../models/User.js'; // Adjust path as necessary
import express from 'express';
const router = express.Router();
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query to check if the email exists in the database using Sequelize
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the password (without encryption, as you requested)
    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    // Successful login response
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
});
export { router as userRoutes };