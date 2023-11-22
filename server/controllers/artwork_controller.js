const ArtWork = require("../models/ArtWork");
const User = require("../models/User");

const artwork_controller = {
  async newArt(req, res) {
    try {
      const { artWorkTitle, artWorkAmount, artWorkURL } = req.body;
      const createdBy = req.user._id;
      const artwork = await ArtWork.create({
        artWorkTitle,
        artWorkAmount,
        artWorkURL,
        createdBy,
      });

      res.status(201).json(artwork);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async updateArt(req, res) {
    const user_id = req.params.user_id;
    const { artWorkTitle, artWorkAmount, artWorkURL } = req.body;

    try {
      const allowed = req.user.shops.includes(user_id);

      if (allowed) {
        const updated_user = await User.findByIdAndUpdate(
          user_id,
          {
            artWorkTitle,
            artWorkAmount,
            artWorkURL,
          },
          { new: true }
        );

        return res.json({
          message: "Shop updated successfully!",
          shop: updated_shop,
        });
      }

      // User does not own shop so we deny the coffee addition
      res.status(401).send({
        message:
          "You are not the owner of that shop and cannot perform this action.",
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = artwork_controller;
