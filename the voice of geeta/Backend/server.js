import express from 'express';
import cors from 'cors';
import shlokaRoutes from './routes/shlokaRoutes.js';
import userRoutes from './routes/userRoutes.js'; // ✅ new line

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// 🔁 API Routes
app.use('/api/shlokas', shlokaRoutes);
app.use('/api/users', userRoutes); // ✅ route for users

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
