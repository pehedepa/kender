const TradeSkillsModel = require('../models/tradeSkills');

function tradeSkillsController() {
  function getData(req, res) {
    TradeSkillsModel.find({})
      .then((allDataArr) => res.json(allDataArr));
  }

  function createData(req, res) {
    const newTradeSkills = new TradeSkillsModel(req.body);
    try {
      newTradeSkills.save();
      res.json(newTradeSkills);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

  return {
    getData,
    createData
  };
}

module.exports = tradeSkillsController();
