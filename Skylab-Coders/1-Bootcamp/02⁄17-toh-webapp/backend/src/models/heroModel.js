const { Schema, model } = require('mongoose');

const heroSchema = new Schema({
  id: Number,
  name: String
});

module.exports = model('Heroes', heroSchema);
