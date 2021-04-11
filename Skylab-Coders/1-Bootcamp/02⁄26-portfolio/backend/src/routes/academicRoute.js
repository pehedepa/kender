const { Router } = require('express');
const academicController = require('../controllers/academicController');

function academicRouter() {
  const router = Router();

  router
    .route('/')
    .get(academicController.getData)
    .post(academicController.createData);

  return router;
}

module.exports = academicRouter();
