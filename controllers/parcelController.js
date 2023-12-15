const Parcel = require('../models/parcelModel'); 

exports.parcelsList = async function (req, res) {
    try {
        const data = await Parcel.find({});
        console.log("All parcels:", JSON.stringify(data, null, 2));
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
