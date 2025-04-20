import { Shloka } from "../models/index.js";

// GET all shlokas
export const getAllShlokas = async (req, res) => {
  try {
    const shlokas = await Shloka.findAll(); // You can add filters if needed
    res.json(shlokas);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch shlokas" });
  }
};

// PUT: Update visibility (true/false)
export const updateShlokaVisibility = async (req, res) => {
  const { id } = req.params;
  const { visible } = req.body;

  try {
    const shloka = await Shloka.findByPk(id);
    if (!shloka) {
      return res.status(404).json({ error: "Shloka not found" });
    }

    shloka.visible = visible;
    await shloka.save();
    res.json({ message: "Visibility updated", shloka });
  } catch (error) {
    res.status(500).json({ error: "Error updating visibility" });
  }
};
