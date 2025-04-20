import express from 'express';
import Shloka from '../models/shloka.js';

const router = express.Router();

router.post('/api/add-shloka', async (req, res) => {
  console.log("Incoming request body:", req.body); // Inspect incoming data

  try {
    const { title, content, visible } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required." });
    }

    const newShloka = await Shloka.create({
      title,
      content,
      visible: visible !== undefined ? visible : true,
    });

    res.status(201).json({ message: 'Shloka added successfully', shloka: newShloka });
  } catch (error) {
    console.error("❌ Error adding shloka:", error); // Print full error in terminal
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/api/shlokas', async (req, res) => {
  try {
    const shlokas = await Shloka.findAll(); // Sequelize query to fetch all shlokas
    res.status(200).json(shlokas);
  } catch (error) {
    console.error("❌ Error fetching shlokas:", error);
    res.status(500).json({ error: "Failed to fetch shlokas" });
  }
});

export default router;