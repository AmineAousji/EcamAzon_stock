const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String, //url
    required: true,
  },
  wareHouse: {
    type: String,
    ref: 'WareHouse',
    required: true,
  },

});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
