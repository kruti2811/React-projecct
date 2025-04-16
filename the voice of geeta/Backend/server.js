import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"; // Import your user routes

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes); // Ensure the correct API route for users

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
