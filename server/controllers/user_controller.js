const User = require("../models/User");

const { createToken } = require("./helpers");

const user_controller = {
  // Register a user
  async register(req, res) {
    try {
      const user = await User.create(req.body);

      const token = await createToken(user._id);

      // Authenticate/Log In User
      res.cookie("token", token, {
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: true,
      });

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(403).send({
        message: err.message,
      });
    }
  },

  // Log user in
  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(403).send({
        message: "User with that email address not found.",
      });

    const pass_id_valid = await user.validatePass(password);

    if (!pass_id_valid)
      return res.status(403).send({
        message: "Password is invalid.",
      });

    const token = await createToken(user._id);

    res.cookie("token", token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    });

    res.json(user);
  },

  // Test protected method
  protected(req, res) {
    res.json({
      user: req.user,
      authenticated: true,
    });
  },

  logout(req, res) {
    res.clearCookie("token");

    res.json({
      message: "Logged Out Successfully",
    });
  },
};

module.exports = user_controller;
