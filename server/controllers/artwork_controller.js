const ArtWork = require("../models/ArtWork");

const artwork_controller = {
  async newArt(req, res) {
    try {
      const artwork = await ArtWork.create({
        artWorkTitle: req.body.artWorkTitle,
        artWorkAmount: req.body.artWorkAmount,
        artWorkURL: req.body.artWorkURL,
      });

      res.json(artwork);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = artwork_controller;
