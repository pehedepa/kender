const { Router } = require('express');
const HeroController = require('../controllers/heroController');

function HeroRouter() {
  const router = Router();

  router
    .route('/')
    .get(HeroController.getAll)
    .post(HeroController.createHero);

  router
    .route('/:heroId')
    .get(HeroController.getOne)
    .delete(HeroController.deleteHero)
    .put(HeroController.updateHero);

  return router;
}

module.exports = HeroRouter();
