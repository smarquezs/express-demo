const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongDB'))
  .catch(error => console.log(error));
