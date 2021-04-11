const { Router } = require('express');
const workExperienceController = require('../controllers/workExperienceController');

function WorkExperienceRouter() {
  const router = Router();

  router
    .route('/')
    .get(workExperienceController.getData)
    .post(workExperienceController.createData);

  return router;
}

module.exports = WorkExperienceRouter();
