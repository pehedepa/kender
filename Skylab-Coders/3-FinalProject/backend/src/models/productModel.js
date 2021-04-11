const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  keywords: Array,
  category: String,
  ageRange: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Products', productSchema);
