const express = require('express');
const app = express();
const fs = require('fs')

app.use(express.json());

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const mongoose = require('mongoose');
const Stock = require('./mongodb');
// const Parcel = require('./models/parcelModel');
// const Products = require('./models/productModel');
// const WareHouse = require('./models/wareHouseModel');
// const Worker = require('./models/workersModel');


// const newWareHouse = new WareHouse({
//     wareHouse_name: 'wareHouse 1',
//     wareHouse_adress: 'rue de la loi 11',
//   });
  
//   newWareHouse.save()
//     .then(savedWareHouse => {
//       console.log('warehouse saved:', savedWareHouse);
//     })
//     .catch(error => {
//       console.error('Error saving warehouse:', error);
//     });

let router = require('./routes');
app.use('/api', router);

app.use(function (req, res, next) {
    res.status(404).json({"error": "path not found"});
});

let port = 3000;
app.listen(port, () => console.log('Server is now listening on port ' + port));
