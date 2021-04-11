const { Schema, model } = require('mongoose');

const workExperience = new Schema({
  title: { type: String },
  company: { type: String },
  role: { type: String },
  city: { type: String },
  dateStart: { type: String },
  dateFinished: { type: String },
  jobDescription: { type: String },
  website: { type: String }
});

module.exports = model('WorkExperience', workExperience);
