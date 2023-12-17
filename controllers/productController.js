const Product = require('../models/productModel'); 

exports.productsList = async function (req, res) {
    try {
        const data = await Product.find({});
        console.log("All products:", JSON.stringify(data, null, 2));
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.productCreate = async (req, res) => {
    let product = new Product({
        name: req.body.name, 
        quantity: req.body.quantity, 
        price: req.body.price, 
        description: req.body.description,
        picture: req.body.picture,
        wareHouse: req.body.wareHouse
      })
    await product.save()
        .then(data => {
            console.log(product.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}
