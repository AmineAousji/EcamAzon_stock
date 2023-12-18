const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const parcelSchema = new mongoose.Schema({
  // worker: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Workers',
  //   required: false,
  // },
  worker: {
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
  id_user:{
    type: String,
    required: true,
  },
  id_order:{
    type: String,
    required: true,
  },
});

// parcelSchema.pre('save', async function (next) {
//   try {
//     const worker = await mongoose.model('Workers').findOne({ _id: this.worker });
//     if (worker) {
//       this.workerName = `${worker.name}`;
//     }
//     next();
//   } catch (error) {
//     next(error);
//   }
// });
const Parcels = mongoose.model('Parcels', parcelSchema);

module.exports = Parcels;
