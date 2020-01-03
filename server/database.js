const mongoose = require('mongoose');

const URI = 'mongodb://localhost/sistema-inventario';

//conectividad a la base de datos


mongoose.connect(URI)
      .then(db => console.log('DB is conected'))
      .catch(err => console.error(err));

module.exports = mongoose;