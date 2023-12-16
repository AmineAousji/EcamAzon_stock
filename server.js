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


// Stock.once('open', async () => {
//     try {
//         // Example usage: creating a new parcel
//         const parcel = new Parcel({
//             id_parcel: 1,
//             worker: 'Amine',
//             destination: 'Belgium',
//             contents: 'Computer',
//         });

//         // Save the product to the MongoDB database using async/await
//         const result = await parcel.save();

//         console.log('Parcel saved successfully:', result);
//     } catch (err) {
//         console.error('Error saving parcel:', err);
//     } finally {
//         // Close the connection to the MongoDB database
//         mongoose.connection.close();
//     }
// });

// Stock.once('open', async () => {
//     try {
//         // Example usage: creating a new product
//         const product = new Products({
//             id_products: 1,
//             name: "voiture",
//             quantity: 10,
//             price: 100.00,
//             description: 'This is the description of a product',
//             picture: "https://media.playmobil.com/i/playmobil/71328_product_detail/Salle%20de%20sport?locale=fr-BE,fr,en,*&$pdp_product_main_xl$&fmt=auto&strip=true&qlt=80&fmt.jpeg.chroma=1,1,1&unsharp=0,1,1,7&fmt.jpeg.interlaced=true",
//         });

//         // Save the product to the MongoDB database using async/await
//         const result = await product.save();

//         console.log('Product saved successfully:', result);

//         //const base64Picture = pictureData.toString('base64');
        
//     } catch (err) {
//         console.error('Error saving product:', err);
//     } finally {
//         // Close the connection to the MongoDB database
//         mongoose.connection.close();
//     }
// });

let router = require('./routes');
app.use('/api', router);

// Manage bad route
app.use(function (req, res, next) {
    res.status(404).json({"error": "path not found"});
});

// Launch app to listen to specified port
let port = 3000;
app.listen(port, () => console.log('Server is now listening on port ' + port));
