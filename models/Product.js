const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
      type: String,
  },
  description: {
    type: String,
  },
  price: {
      type: Number,
      required: true
  },
  countInStock: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;