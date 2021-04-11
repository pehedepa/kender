const GenericModel = require('../models/generic');

function genericController() {
  function getData(req, res) {
    GenericModel.find({})
      .then((allDataArr) => res.json(allDataArr));
  }

  function createData(req, res) {
    const newGeneric = new GenericModel(req.body);
    try {
      newGeneric.save();
      res.json(newGeneric);
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

module.exports = genericController();
