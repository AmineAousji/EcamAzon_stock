const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id_products: {
    type: Number,
    required: true,
    unique: true, 
  },
  name:{
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String, 
    required: true,
  },

});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
