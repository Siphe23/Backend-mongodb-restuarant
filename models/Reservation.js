const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  date: { type: String, required: true },
  time: String,
  guests: {
    adult_no: { type: Number, required: true },
    kids_no: Number,
  },
  table_id: Number,
  table_no: String,
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
