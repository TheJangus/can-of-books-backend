'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const boocksSchema = new Schema({
  title: {type: String, required: true},
  aurthor: {type:String, required: true},
  description: {String, required: true},
  status: {type: Boolean, required: true}
});

const BookModel = mongoose.model('Book', boocksSchema);

module.exports=BookModel;

