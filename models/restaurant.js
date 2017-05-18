const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ratingSchema = new Schema({
  walk: { type: Number, enum: [1, 2, 3, 4, 5] },
  price: { type: Number, enum: [1, 2, 3, 4, 5] },
  speed: { type: Number, enum: [1, 2, 3, 4, 5] },
  dress: { type: Number, enum: [1, 2, 3, 4, 5] },
  latenight: Boolean
});

var restaurantSchema = new Schema({
  name: String,
  zomid: Number,
  rating: [ratingSchema],
  url: String,
  img_url: {type: String, default: 'http://i.imgur.com/enUc2e8.jpg'},
  longitude: Number,
  latitude: Number,
  address: String,
  avecost: Number,
  cuisine: {type: String, default: 'food'},
  zomrate: Number
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
