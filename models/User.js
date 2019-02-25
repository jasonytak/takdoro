const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  user: String,
  socketID: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
