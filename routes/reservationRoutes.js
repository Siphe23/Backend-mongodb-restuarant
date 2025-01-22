// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const authMiddleware = require('../middleware/authMiddleware');  // Assuming you have auth middleware

// Create a reservation
router.post('/reservations', authMiddleware, reservationController.createReservation);

// Get reservations for a specific restaurant
router.get('/reservations/:restaurant_id', authMiddleware, reservationController.getReservations);

// Update a reservation
router.put('/reservations/:reservation_id', authMiddleware, reservationController.updateReservation);

// Delete a reservation
router.delete('/reservations/:reservation_id', authMiddleware, reservationController.deleteReservation);

module.exports = router;
