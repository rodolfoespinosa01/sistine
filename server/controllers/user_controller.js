const User = require("../models/User");

const { createToken } = require("./helpers");

const user_controller = {
  // register User
  async register(req, res) {
    try {
      const user = await User.create(req.body);

      const token = await createToken(user._id);

      // Authenticate/Log In User
      res.cookie("cookieToken", token, {
        maxAge: 2 * 60 * 1000, //2 minutes
        httpOnly: true,
      });

      res.json(user);
    } catch (error) {
      res.status(403).send({
        message: error.message,
      });
    }
  },
};

module.exports = user_controller;
