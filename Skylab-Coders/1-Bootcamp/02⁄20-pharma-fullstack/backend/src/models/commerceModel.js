const { Schema, model } = require('mongoose');

const commerceModel = new Schema({
  name: { type: String },
  price: { type: Number },
  stock: { type: Number },
  imageUrl: { type: String }
});

module.exports = model('Items', commerceModel);
