// routes/daily.js
import express from 'express';
import { getTodayShlokas } from '../controller/dailyController.js';

const router = express.Router();

router.get('/today', getTodayShlokas);

export default router;
