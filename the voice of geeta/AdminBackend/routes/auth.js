import express from "express";
import sequelize from "../db.js";

const router = express.Router();

// Create table if not exists (optional)
const createUserTable = async () => {
  await sequelize.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL
    )
  `);
};
createUserTable();

// Register route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const [existingUser] = await sequelize.query(
      "SELECT * FROM users WHERE email = :email",
      { replacements: { email }, type: sequelize.QueryTypes.SELECT }
    );

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await sequelize.query(
      "INSERT INTO users (username, email, password) VALUES (:username, :email, :password)",
      {
        replacements: { username, email, password },
      }
    );

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration Error:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
