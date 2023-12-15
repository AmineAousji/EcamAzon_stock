const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
  id_parcel: {
    type: Number,
    required: true,
    unique: true,
  },
  worker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workers',
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

// Create the Category model based on the schema
const Parcels = mongoose.model('Parcels', parcelSchema);

module.exports = Parcels;
