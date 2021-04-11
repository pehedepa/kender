const { Router } = require('express');
const controller = require('../controllers/userController');

function userRouter() {
  const router = Router();

  router
    .route('/')
    .put(controller.updateUser);

  return router;
}

module.exports = userRouter();
