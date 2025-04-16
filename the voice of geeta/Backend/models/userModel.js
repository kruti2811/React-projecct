// models/userModel.js
import db from '../config/db.js';

export const createUser = async (username, email, password) => {
  const result = await db.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, password]
  );
  return result.rows[0];
};

export const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM users');
  return result.rows;
};
