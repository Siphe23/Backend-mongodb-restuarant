const express = require('express');
const { getAllRestaurants, getRestaurantById } = require('../controllers/restaurantController');
const router = express.Router();

// Get all restaurants
router.get('/', getAllRestaurants);

// Get a specific restaurant
router.get('/:id', getRestaurantById);

module.exports = router;
