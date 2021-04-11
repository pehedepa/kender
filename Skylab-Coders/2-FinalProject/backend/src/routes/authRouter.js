const { Router } = require('express');
const passport = require('passport');
const controller = require('../controllers/authController');

function AuthRouter() {
  const router = new Router();

  router.post('/register', controller.register);

  router
    .route('/login')
    .post(
      passport.authenticate('local'),
      controller.login
    );

  router
    .route('/logout')
    .post(controller.logout);

  return router;
}

module.exports = AuthRouter();
