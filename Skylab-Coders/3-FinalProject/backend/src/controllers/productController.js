const Product = require('../models/productModel');
require('../models/userModel');

async function getAllProducts(req, res) {
  try {
    const products = await Product.find({}).populate('user');
    res.status(200);
    res.json(products);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params._id);
    res.status(200);
    res.send('DELETED');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function createProduct(req, res) {
  const {
    name, price, description, image, user, category, ageRange, keywords
  } = req.body;
  const product = new Product({
    name,
    price,
    description,
    image,
    user,
    category,
    ageRange,
    keywords
  });
  res.status(200);
  product.save();
  res.send('CREATED');
}

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct
};
