// AdminBackend/server.js
import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.routes.js'; // Corrected import statement

const app = express();
const port = 5000;
import cors from 'cors';
app.use(bodyParser.json());
// Use CORS middleware
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',  // Allow only this origin
}));


// Use the authentication routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', authRoutes); 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
