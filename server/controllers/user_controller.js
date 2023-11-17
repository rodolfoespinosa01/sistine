const User = require("../models/User");

const user_controller = {
  // register User
  async register(req, res) {
    try {
      const user = await User.create(req.body);

      res.json(user);
    } catch (error) {
      res.status(403).send({
        message: error.message,
      });
    }
  },
};

module.exports = user_controller;
