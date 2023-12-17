const express = require('express');
const app = express();
const fs = require('fs')

app.use(express.json());

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const mongoose = require('mongoose');
const Stock = require('./mongodb');
const Parcel = require('./models/parcelModel');
// const Products = require('./models/productModel');
// const WareHouse = require('./models/wareHouseModel');
// const Worker = require('./models/workersModel');


// const newParcel = new Parcel({
//     worker: '657ce5ba13d42f47a95ecdd3',
//     destination: 'Destination',
//     contents: 'Contents',
//     status: 'Not ready',
//   });
  
//   newParcel.save()
//     .then(savedParcel => {
//       console.log('Parcel saved:', savedParcel);
//     })
//     .catch(error => {
//       console.error('Error saving parcel:', error);
//     });

let router = require('./routes');
app.use('/api', router);

app.use(function (req, res, next) {
    res.status(404).json({"error": "path not found"});
});

let port = 3000;
app.listen(port, () => console.log('Server is now listening on port ' + port));
