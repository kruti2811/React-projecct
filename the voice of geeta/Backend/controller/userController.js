// controllers/userController.js

import User from "../models/userModel.js"; // Assuming you have a User model

// Register User
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      username,
      email,
      password, // In production, make sure to hash the password
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Get all users from the database
    res.json(users); // Return the users in JSON format
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
