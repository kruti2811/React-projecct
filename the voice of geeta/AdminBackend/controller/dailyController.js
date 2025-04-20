// controller/dailyController.js
import { Op } from 'sequelize';
import Shloka from '../models/Shloka.js';

// Function to fetch today's visible Shlokas
export const getTodayShlokas = async (req, res) => {
  try {
    // Get current date and adjust for start and end of the day
    const today = new Date();
    
    // Set start of the day (midnight)
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    
    // Set end of the day (just before midnight)
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    console.log('Start of Day:', startOfDay);
    console.log('End of Day:', endOfDay);

    // Fetch only visible Shlokas that were created today
    const shlokas = await Shloka.findAll({
      where: {
        createdAt: {
          [Op.gte]: startOfDay,  // Greater than or equal to start of the day
          [Op.lte]: endOfDay,    // Less than or equal to end of the day
        },
        visible: true  // Fetch only shlokas marked as visible
      },
      order: [['createdAt', 'DESC']],  // Order by creation time, latest first
    });

    console.log('Shlokas fetched:', shlokas);

    // Send the fetched Shlokas as a response
    res.status(200).json(shlokas);
  } catch (error) {
    console.error('Error fetching today\'s shlokas:', error);
    res.status(500).json({ message: 'Error fetching today\'s shlokas' });
  }
};
