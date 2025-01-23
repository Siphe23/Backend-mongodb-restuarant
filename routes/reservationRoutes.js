const express = require('express');
const { createReservation, getReservations, updateReservation, deleteReservation } = require('../controllers/reservationController');
const router = express.Router();

// Create reservation
router.post('/', createReservation);

// Get reservations
router.get('/:restaurant_id', getReservations);

// Update reservation
router.put('/:reservation_id', updateReservation);

// Delete reservation
router.delete('/:reservation_id', deleteReservation);

module.exports = router;
