const { Router } = require('express');
const userController = require('../controllers/userController');

function UserRouter() {
  const router = Router();

  router.route('/')
    .get(userController.getAll)
    .post(userController.createUser);

  router.route('/:userId')
    .get();
}
module.exports = UserRouter();
