const { Router } = require('express');
const tradeSkillsController = require('../controllers/tradeSkillsController');

function TradeSkillsRouter() {
  const router = Router();

  router
    .route('/')
    .get(tradeSkillsController.getData)
    .post(tradeSkillsController.createData);

  return router;
}

module.exports = TradeSkillsRouter();
