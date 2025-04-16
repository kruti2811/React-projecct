import express from 'express';
import pool from '../config/db.js'; // PostgreSQL connection

const router = express.Router();

// Add new shloka (Admin Panel)
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO shlokas (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting shloka:', err);
    res.status(500).send('Server error');
  }
});

// Get the most recent Shloka (User Dashboard)
router.get('/today', async (req, res) => {
  try {
    // Fetch the most recent shloka from the database (ordered by ID)
    const result = await pool.query('SELECT * FROM shlokas ORDER BY id DESC LIMIT 1');

    if (result.rows.length > 0) {
      return res.json(result.rows[0]); // Send the most recent shloka
    } else {
      res.status(404).send('No shlokas found');
    }
  } catch (err) {
    console.error('Error fetching daily shloka:', err);
    res.status(500).send('Server error');
  }
});

export default router;
