const Restaurant = require('../models/Restaurant');
const mongoose = require('mongoose');

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('category_id');
    res.status(200).json(restaurants);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restaurants", details: err.message });
  }
};

// Get a restaurant by ID
const getRestaurantById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid restaurant ID format" });
  }

  try {
    const restaurant = await Restaurant.findById(id).populate('category_id');
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json({ error: "Error retrieving restaurant", details: err.message });
  }
};

module.exports = { getAllRestaurants, getRestaurantById };
