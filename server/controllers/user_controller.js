const User = require("../models/User");

const { verify } = require("jsonwebtoken");

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
      let message;

      if (err.code === 11000) {
        message = "That email address is already in use.";
      } else {
        message = err.message;
      }

      res.status(403).send({
        code: err.code,
        message,
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
      secure: process.env.PORT ? true : false,
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

  async authenticate(req, res) {
    const token = req.cookies.token;

    if (!token) return res.json({ user: null });

    try {
      const data = await verify(token, process.env.JWT_SECRET, {
        maxAge: "1hr",
      });

      const user = await User.findById(data.user_id);

      res.json({ user });
    } catch (error) {
      res.json({ user: null });
    }
  },

  logout(req, res) {
    res.clearCookie("token");

    res.json({
      message: "Logged out successfully!",
    });
  },
};

module.exports = user_controller;
