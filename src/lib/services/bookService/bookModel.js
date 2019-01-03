const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  }, 
  comments: [ String ]
});

module.exports = mongoose.model('Book', book);