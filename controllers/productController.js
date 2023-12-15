const Product = require('../models/productModel'); 

exports.productsList = async function (req, res) {
    try {
        const data = await Product.find({});
        console.log("All products:", JSON.stringify(data, null, 2));
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
