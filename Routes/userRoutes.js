const express = require("express");
const router = express.Router();
const userService = require("../services/userServices");
const { Register, Login } = require("../controller/userController");

// Register user
router.post("/register", Register);

// Login user

router.post("/login", Login);
