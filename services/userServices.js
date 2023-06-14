const bcrypt = require("bcrypt");
const userRepository = require("../dataacess/userDataaccess.js");

// Register a new user
async function registerUser(username, email, password) {
  // Validate user input

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user in the database
  await userRepository.createUser(username, email, hashedPassword);
}

// Login a user
async function loginUser(email, password) {
  // Validate user input

  // Check user credentials
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate and return a token (JWT)
  // You can use libraries like `jsonwebtoken` for this
}

module.exports = {
  registerUser,
  loginUser,
};
