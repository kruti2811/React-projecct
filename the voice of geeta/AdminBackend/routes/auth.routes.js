  // AdminBackend/routes/auth.routes.js
  import express from 'express';
  import User from '../models/user.model.js'; // Import the User model

  const router = express.Router();

  // POST request to register a new user
  router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const user = await User.create({
        username,
        email,
        password,
      });
      res.status(201).json(user); // Respond with the created user data
    } catch (err) {
      res.status(500).json({ error: 'Error creating user', details: err.message });
    }
  });
  export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.password !== password) {
        return res.status(401).json({ message: "Incorrect password" });
      }

      res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };



  export default router;
