require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Make sure to include CORS package
const userRoutes = require('./routes/userRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Enable CORS (Allow requests from specific origins)
const allowedOrigins = ['http://192.168.1.238:5000', 'http://localhost:5000'];  // Adjust as necessary
app.use(cors({
  origin: allowedOrigins,
}));

// Middleware to parse JSON request body
app.use(express.json());

// Log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  console.log('Request Headers:', req.headers);
  console.log('Request Body:', req.body);
  next();
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://192.168.1.238:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
  });
