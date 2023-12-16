const mongoose = require('mongoose');

const wareHouselSchema = new mongoose.Schema({
  wareHouse_name: {
    type: String, 
    required: true,
  },
  wareHouse_adress: {
    type: String,
    required: true,
  },
});

const WareHouse = mongoose.model('WareHouse', wareHouselSchema);

module.exports = WareHouse;
