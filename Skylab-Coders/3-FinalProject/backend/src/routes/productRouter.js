const { Router } = require('express');
const controller = require('../controllers/productController');

function ProductRouter() {
  const router = Router();

  router
    .route('/')
    .get(controller.getAllProducts)
    .post(controller.createProduct);

  router
    .route('/:_id')
    .delete(controller.deleteProduct);

  return router;
}

module.exports = ProductRouter();
