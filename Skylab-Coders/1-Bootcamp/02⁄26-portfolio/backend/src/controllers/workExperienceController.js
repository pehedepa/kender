const WorkExperienceModel = require('../models/workExperience');

function workExperienceController() {
  function getData(req, res) {
    WorkExperienceModel.find({})
      .then((allDataArr) => res.json(allDataArr));
  }

  function createData(req, res) {
    const newWorkExperience = new WorkExperienceModel(req.body);
    try {
      newWorkExperience.save();
      res.json(newWorkExperience);
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

module.exports = workExperienceController();
