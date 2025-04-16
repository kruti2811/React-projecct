// server.js
import express from 'express';
import cors from 'cors';
import shlokaRoutes from './routes/shlokaRoutes.js'; // ✅ make sure this path is correct

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use(express.json());
app.use('/api/shlokas', shlokaRoutes); // ✅ this is the route you want

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});