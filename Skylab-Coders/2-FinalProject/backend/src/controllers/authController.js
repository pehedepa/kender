const md5 = require('md5');
const User = require('../models/userModel');

const register = async (req, res) => {
  const {
    email, password, location, name
  } = req.body;
  try {
    const found = await User.findOne({ email: req.body.email });
    if (!found) {
      const user = new User({
        email,
        password: md5(password),
        location,
        name
      });
      res.status(201);
      user.save();
      res.send('CREATED');
    } else {
      res.status(203);
      res.send('FAILED');
    }
  } catch (error) {
    res.status(400);
    res.send(`Error: ${error}`);
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  res.status(200);
  res.json(user);
};

function logout(req, res) {
  req.logout();
  res.status(200);
  res.send('LOGOUT');
}

module.exports = { register, login, logout };
