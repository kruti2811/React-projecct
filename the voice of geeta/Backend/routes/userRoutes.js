// routes/userRoutes.js
import express from 'express';
import db from '../config/db.js';

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
