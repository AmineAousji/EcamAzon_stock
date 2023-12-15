const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  id_worker: {
    type: Number,
    required: true,
    unique: true, 
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Workers = mongoose.model('Workers', workerSchema);

module.exports = Workers;
