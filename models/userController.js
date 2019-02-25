const User = require('./User');

const userController = {};

userController.createUser = (req, res) => {
  User.create({ user: req.body.user }, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

userController.findCurrentUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) throw err;
    res.send(users);
  });
};

// userController.saveAndFind = async (req, res) => {
//   await User.create({ user: req.body.user });
//   await User.find({}, (err, user) => {
//     if (err) throw err;
//     res.send(user);
//   });
// };

module.exports = userController;
