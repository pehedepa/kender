const User = require('../models/userModel');
require('../models/userModel');

async function updateUser(req, res) {
  const { _id } = req.body;
  delete req.body._id;
  const dataToUpdate = req.body;
  try {
    const updatedProfile = await User.findByIdAndUpdate(_id, dataToUpdate, { new: true });
    res.status(200);
    res.json(updatedProfile);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating your product');
  }
}

module.exports = {
  updateUser
};
