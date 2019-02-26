const User = require('./User');

const userController = {};

userController.createUser = async (req, res) => {
  await User.create({ user: req.body.user, socketID: req.body.socketID }, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

userController.findCurrentUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) throw err;
    res.send(users);
  });
};

userController.deleteUser = async (socketID) => {
  await User.deleteOne({ socketID }, (err) => {
    if (err) throw err;
  });
};

userController.createAndFind = async (req, res) => {
  await User.create({ user: req.body.user, socketID: req.body.socketID });
  await User.find({}, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

module.exports = userController;
