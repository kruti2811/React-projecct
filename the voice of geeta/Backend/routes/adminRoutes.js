// routes/adminRoutes.js
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// ✅ Default Admin Credentials
const DEFAULT_ADMIN = {
  username: process.env.ADMIN_USERNAME || 'admin',
  password: process.env.ADMIN_PASSWORD || 'admin123'
};

// 🔐 Admin Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === DEFAULT_ADMIN.username && password === DEFAULT_ADMIN.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET || 'secretkey', {
      expiresIn: '1h'
    });

    return res.json({ token, message: 'Login successful' });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

export default router;
