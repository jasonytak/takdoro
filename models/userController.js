const User = require('./User');

const userController = {};

userController.createUser = (req, res) => {
  User.create({ user: req.body.user }, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

userController.findCurrentUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

// userController.saveAndFind = async (req, res) => {
//   await User.create({ user: req.body.user }, (err, user) => {
//     console.log(user);
//   });
//   await User.find({}, (err, user) => {
//     if (err) throw err;
//     res.send(user);
//   });
// };

module.exports = userController;
