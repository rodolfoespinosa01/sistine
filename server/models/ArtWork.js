const { Schema, model } = require("mongoose");

const artWorkSchema = new Schema({
  artWorkTitle: {
    type: String,
    required: true,
  },
  artWorkAmount: {
    type: Number,
    required: true,
  },
  artWorkURL: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Basic URL validation, you might want to use a library for more robust validation
        return /^(ftp|http|https):\/\/[^ "]+$/.test(value);
      },
      message: "Please enter a valid URL for the artwork.",
    },
  },
});

const ArtWork = model("ArtWork", artWorkSchema);

module.exports = ArtWork;
