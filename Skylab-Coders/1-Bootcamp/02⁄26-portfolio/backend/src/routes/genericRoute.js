const { Router } = require('express');
const genericController = require('../controllers/genericController');

function GenericRouter() {
  const router = Router();

  router
    .route('/')
    .get(genericController.getData)
    .post(genericController.createData);

  return router;
}

module.exports = GenericRouter();
