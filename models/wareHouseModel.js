const mongoose = require('mongoose');

const wareHouselSchema = new mongoose.Schema({
  id_wareHouse: {
    type: Number,
    required: true,
    unique: true,
  },
  name_wareHouse: {
    type: String, 
    required: true,
  },
  adress_wareHouse: {
    type: String,
    required: true,
  },
});

const WareHouse = mongoose.model('WareHouse', wareHouselSchema);

module.exports = WareHouse;
