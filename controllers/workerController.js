const Worker = require('../models/workersModel'); 


exports.workerCreate = async (req, res) => {
  let worker = new Worker({ name: req.body.name, surname: req.body.surname, password: req.body.password })
  await worker.save()
      .then(data => {
          console.log(worker.toJSON());
          res.json(data);
      })
      .catch(err => {
          res.status(500).json({ message: err.message })
      })
}

exports.checkWorker = async function (req, res) {
  console.log(req.body.name);

  if (req.body.name && req.body.password) {
    try {
      const data = await Worker.findOne({ name: req.body.name, password: req.body.password });

      if (data) {
        console.log(data);
        res.json(data);
      } else {
        res.status(400).json({ message: "Worker not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(400).json({ message: "Invalid request parameters" });
  }
};
