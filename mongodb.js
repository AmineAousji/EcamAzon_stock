require('dotenv').config();
const mongoose = require('mongoose');

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27117/Stock', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Vérification de la connexion
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});


module.exports = db;
