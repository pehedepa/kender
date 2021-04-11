const { Schema, model } = require('mongoose');

const genericModel = new Schema({
  name: { type: String },
  surname: { type: String },
  address: { type: String },
  phone: { type: String },
  nationality: { type: String },
  email: { type: String },
  photoURL: { type: String },
  linkedinURL: { type: String },
  githubURL: { type: String }
});

module.exports = model('Generic', genericModel);
