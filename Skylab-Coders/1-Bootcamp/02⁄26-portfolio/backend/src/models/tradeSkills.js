const { Schema, model } = require('mongoose');

const tradeSkillsModel = new Schema({
  skillName: { type: String },
  skillDescription: { type: String }
});

module.exports = model('TradeSkills', tradeSkillsModel);
