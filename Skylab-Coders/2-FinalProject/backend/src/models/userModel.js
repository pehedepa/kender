const { model, Schema } = require('mongoose');
const md5 = require('md5');

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  photo: String,
  location: String,
  address: String,
  cc: String
});

userSchema.methods.validPassword = function validPassword(pwd) {
  return this.password === md5(pwd);
};

module.exports = model('User', userSchema);
