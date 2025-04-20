import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import bodyParser from "body-parser";
import sequelize from './db.js';
import cors from "cors";
import { userRoutes } from './routes/login.js';
import editProfileRoute from "./routes/editProfile.js"; 
import shlokaRoutes from './routes/shlokasRoutes.js';
import activeUserRoutes from './routes/activeUserRoutes.js'; 
import dailyRoute from "./routes/daily.js";

dotenv.config();
const app = express();

const PORT = 3000;

app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(express.json());

app.use(shlokaRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api", editProfileRoute);
app.use('/api', activeUserRoutes); 

// Assuming your route handler is in daily.js

app.use("/api/shlokas", dailyRoute);
// Default route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Database connection check
app.listen(PORT, async () => {
  try {
    console.log("✅ Database connected");
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
});


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});