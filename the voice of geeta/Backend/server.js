// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import db from "./models/index.js"; // Sequelize models
// import userRoutes from "./routes/userRoutes.js"; // Your user routes

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // API Routes
// app.use("/api/users", userRoutes);

// // Database connection + Server start
// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`✅ Server running on http://localhost:${PORT}`);
//   });
// }).catch(err => {
//   console.error("❌ Failed to connect to database:", err);
// });
