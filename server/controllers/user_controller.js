const User = require("../models/User");

const { verify } = require("jsonwebtoken");

const { createToken } = require("./helpers");

const stripeKey =
  "sk_test_51OEFlnCJ8PraGfLbmp0E9NKoPZtliGua7uF2EgCDA2CHGdHNfpK5ZI4go2sSVpiMmr4y9VQjkT7dlqzKsv2RCF3Y00XWNuVYxm";
const stripe = require("stripe")(stripeKey);

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

  async checkout(req, res) {
    try {
      const items = req.body.items;
      let lineItems = [];
      items.forEach((item) => {
        lineItems.push({
          price: item.id,
          quantity: item.quantity,
        });
      });
      const url = req.headers.origin;
      console.log(url);
      const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${url}/paymentcomplete`,
        cancel_url: `${url}/cancel`,
      });

      res.json({
        url: session.url,
      });
    } catch (error) {
      console.error("Checkout error:", error.message);
      res.status(500).json({ error: "Error during checkout." });
    }
  },

  // Get All Users
  async getAllUsers(req, res) {
    try {
      const allUsers = await User.find();

      res.json(allUsers);
    } catch (error) {
      console.log(error);
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
