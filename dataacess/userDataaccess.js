// userRepository.js
const User = require("../models/User");

async function createUser(username, email, password) {
  const newUser = new User({
    username,
    email,
    password,
  });

  await newUser.save();
}

async function getUserByEmail(email) {
  return User.findOne({ email });
}

module.exports = {
  createUser,
  getUserByEmail,
};
