const router = require("express").Router();

const user_controller = require("../controllers/user_controller");

const { isAuthenticated } = require("../controllers/helpers");

// Register User
router.post("/register", user_controller.register);

// Login user
router.post("/login", user_controller.login);

// Protected test route
router.get("/protected", isAuthenticated, user_controller.protected);

module.exports = router;
