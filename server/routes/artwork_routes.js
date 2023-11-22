const router = require("express").Router();

const artwork_controller = require("../controllers/artwork_controller");

const { isAuthenticated } = require("../controllers/helpers");

// Register artwork
router.post("/artworkregister", isAuthenticated, artwork_controller.newArt);

router.put(
  "/artworkupdate/:user_id",
  isAuthenticated,
  artwork_controller.updateArt
);

module.exports = router;
