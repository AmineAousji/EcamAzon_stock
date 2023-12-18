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

exports.parcelCreate = async (req, res) => {
    let parcel = new Parcel({
        worker: req.body.worker, 
        contents: req.body.contents, 
        status: req.body.status,
        id_user: req.body.id_user,        
        id_order: req.body.id_order,
      })
    await parcel.save()
        .then(data => {
            console.log(parcel.toJSON());
            res.json(data);
        })
        .catch(err => {
            res.status(500).json({ message: err.message })
        })
}