const AcademicModel = require('../models/academic');

function academicController() {
  function getData(req, res) {
    AcademicModel.find({})
      .then((allDataArr) => res.json(allDataArr));
  }

  function createData(req, res) {
    const newAcademic = new AcademicModel(req.body);
    try {
      newAcademic.save();
      res.json(newAcademic);
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

module.exports = academicController();
