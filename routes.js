let express = require('express');
let router = express.Router();


const parcelsController = require('./controllers/parcelController');
router.get('/parcels/list', parcelsController.parcelsList);

const productsController = require('./controllers/productController');
router.get('/products/list', productsController.productsList);


module.exports = router;