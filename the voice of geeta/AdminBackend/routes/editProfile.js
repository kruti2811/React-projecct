import express from "express";
import User from "../models/User.js";  // Adjust the import based on your project structure

const router = express.Router();

router.put("/edit-profile", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Find user by email (or any identifier you prefer)
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    user.username = username;
    user.password = password; // Storing password as plain text (NOT recommended for production)
    user.email = email;

    await user.save();

    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating the profile" });
  }
});

export default router;
