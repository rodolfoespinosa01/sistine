const router = require("express").Router();

const user_controller = require("../controllers/user_controller");

const isAuthenticated = require("../controllers/helpers");

// Register User
router.post("/register", user_controller.register);

// Protected Test Route

module.exports = router;
