const User = require('./User');

const userController = {};

userController.saveAndFind = async (req, res, next) => {
  await User.create({ user: req.body.user });
  await User.find({}, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

module.exports = userController;
