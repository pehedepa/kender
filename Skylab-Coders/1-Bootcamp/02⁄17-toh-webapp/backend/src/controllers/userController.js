const User = require('../models/userModel');

function userController() {
  function getAll(req, res) {
    User.find({}).then((usersArray) => res.json(usersArray));
  }

  function createUser(req, res) {
    const newUser = new User({
      ...req.body
    });
    newUser.save((createUserError) => {
      if (createUserError) {
        res.status(404);
        res.send('Algo salio mal creando usuario');
      } else {
        res.json(newUser);
      }
    });
  }

  function getOne(req, res) {
    const { userId } = req.params;

    User.findById(userId, (findUserError, userFound) => {
      if (findUserError) {
        res.status(404);
        res.send('Algo salio mal creando usuario');
      } else {
        res.json(userFound);
      }
    });
  }

  return {
    getAll,
    createUser,
    getOne
  };
}

module.exports = userController();
