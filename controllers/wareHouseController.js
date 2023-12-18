const WareHouse = require ('../models/wareHouseModel');

exports.wareHouseCreate = async (req, res) => {
    let wareHouse = new WareHouse({ wareHouse_name: req.body.wareHouse_name, wareHouse_adress: req.body.wareHouse_adress })
    await wareHouse.save()
        .then(data => {
            console.log(wareHouse.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}

exports.wareHouseList = async function (req, res) {
    try {
        const data = await WareHouse.find({});
        console.log("All WareHouses :", JSON.stringify(data, null, 2));
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};