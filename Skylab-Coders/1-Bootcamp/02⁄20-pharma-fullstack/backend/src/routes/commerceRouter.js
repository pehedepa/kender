const { Router } = require('express');
const commerceController = require('../controllers/commerceController');

function CommerceRouter() {
  const router = Router();

  router
    .route('/')
    .get(commerceController.getItems)
    .post(commerceController.createItem);

  return router;
}

module.exports = CommerceRouter();
