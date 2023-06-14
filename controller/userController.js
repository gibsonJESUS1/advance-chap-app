export const Register = async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, email, password } = req.body;

    // Call the user registration service function
    await userService.registerUser(username, email, password);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const Login = async (req, res) => {
  try {
    // Extract user data from the request body
    const { email, password } = req.body;

    // Call the user login service function
    await userService.loginUser(email, password);

    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
