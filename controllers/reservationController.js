// controllers/reservationController.js
const Reservation = require('../models/Reservation');  // Assuming you have a Reservation model
const User = require('../models/User'); // Assuming you have a User model

// Create a reservation
exports.createReservation = async (req, res) => {
  try {
    const { restaurant_id, date, time, guests, table_id, table_no } = req.body;
    const reservation = new Reservation({
      restaurant_id,
      date,
      time,
      guests,
      table_id,
      table_no,
      user_id: req.user.id, // Assuming user is authenticated
    });

    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ message: 'Error creating reservation', error });
  }
};

// Get reservations for a specific restaurant
exports.getReservations = async (req, res) => {
  try {
    const { restaurant_id } = req.params;
    const reservations = await Reservation.find({ restaurant_id });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching reservations', error });
  }
};

// Update a reservation
exports.updateReservation = async (req, res) => {
  try {
    const { reservation_id } = req.params;
    const updatedData = req.body;
    const updatedReservation = await Reservation.findByIdAndUpdate(reservation_id, updatedData, { new: true });
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(400).json({ message: 'Error updating reservation', error });
  }
};

// Delete a reservation
exports.deleteReservation = async (req, res) => {
  try {
    const { reservation_id } = req.params;
    await Reservation.findByIdAndDelete(reservation_id);
    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting reservation', error });
  }
};
