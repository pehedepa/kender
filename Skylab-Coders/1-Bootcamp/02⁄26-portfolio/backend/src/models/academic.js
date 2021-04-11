const { Schema, model } = require('mongoose');

const academicModel = new Schema({
  title: { type: String },
  center: { type: String },
  dateStart: { type: String },
  dateFinished: { type: String },
  description: { type: String }
});

module.exports = model('Academic', academicModel);
