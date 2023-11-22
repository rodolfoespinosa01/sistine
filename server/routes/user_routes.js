const router = require("express").Router();

const user_controller = require("../controllers/user_controller");

const { isAuthenticated } = require("../controllers/helpers");

// Register user
router.post("/register", user_controller.register);

// Login user
router.post("/login", user_controller.login);

// Protected test route
router.get("/protected", isAuthenticated, user_controller.protected);

// Checkout route
router.post("/checkout", isAuthenticated, user_controller.checkout);

router.get("/authenticate", user_controller.authenticate);

router.get("/logout", user_controller.logout);

router.get("/users", user_controller.getAllUsers);

module.exports = router;
