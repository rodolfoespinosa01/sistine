const router = require("express").Router();
const { image_controller } = require('../controllers/image_controller.js')
const { isAuthenticated } = require("../controllers/helpers");

//POST: Add a new image

router.post('/image', isAuthenticated, image_controller.uploadImage)

//GET(/image/:image_id): Get a particular image in the database
//DELETE(/image/:image_id): Blanks out image, which transfers to all instances of the image in the database
router.route('/image/:image_id')
    .get(image_controller.getImageById)
    .delete(isAuthenticated, image_controller.blankOutImage)

//GET(/user_images/:user_id): Get all images uploaded by user
router.get('/user_images/:user_id', image_controller.getImagesByUser)

//GET(/product_images/:product_id): Get all images associated with a product
router.get('/product_images/:product_id', image_controller.getImagesOfProduct)

module.exports = router