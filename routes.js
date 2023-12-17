let express = require('express');
let router = express.Router();
const jwt = require("jsonwebtoken");

isAuthorized = function(req,res,next){
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, 'my_secret_key', (err, payload) => {
            if (err) {
                res.status(401).json({ error: "Not Authorized" });
                return;
            }
            req.id_user = payload;     
            return next(); 
        });
    }  
    else{
        res.status(403).json({error: "Not Authorized"})                
    }
}


const parcelsController = require('./controllers/parcelController');
router.get('/parcels/list', parcelsController.parcelsList);
router.post('/parcels/', parcelsController.parcelCreate);

const productsController = require('./controllers/productController');
router.get('/products/list', productsController.productsList);
router.post('/products/', productsController.productCreate);

const wareHouseController = require('./controllers/wareHouseController');
router.post('/warehouses/', wareHouseController.wareHouseCreate);

const workersController = require('./controllers/workerController');
router.post('/workers/', workersController.workerCreate);
router.post('/check/', workersController.checkWorker);

router.post('/login', async function (req, res, next) {
    const jwtKey = "my_secret_key"
    const jwtExpirySeconds = 300
    let payload = {name: req.body.name };
    let token = jwt.sign(payload, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
    })

    res.json({ "token": token, "maxAge": jwtExpirySeconds * 1000 });
});

module.exports = router;