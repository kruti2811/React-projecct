import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'admin',
  password: '123',
  port: 5432,
});

export const addShloka = async (req, res) => {
  const { title, content } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO shlokas (title, content) VALUES ($1, $2) RETURNING *',
      [title,content]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting shloka:', error);
    res.status(500).send('Error adding shloka');
  }
};

export const getShlokas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM shlokas ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching shlokas:', error);
    res.status(500).send('Error fetching shlokas');
  }
};
