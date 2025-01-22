const mongoose = require('mongoose');

const coordsSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  address: String,
  title: String,
  longitudeDelta: Number,
  latitudeDelta: Number,
});

const restaurantSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  average_price: Number,
  hours_of_operation: String,
  imageUrl: String,
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  features: [String],
  ratings: { type: Number, default: 0 },
  coords: coordsSchema,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
