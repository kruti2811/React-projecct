import express from "express";
import { registerUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser); // Register route
router.get("/", getUsers); // Get all users route

export default router;
 