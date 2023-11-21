const { Image } = require('../models')

const image_controller = {
    uploadImage(req, res) {
        const imageData = req.body;
        const image = new Image.create({
            ...imageData,
            uploadedBy: req.user._id
        })
        req.user.images.push(image._id)
    },

    getImageById(req, res) {
        //Unfinished
    },

    getImagesByUser(req, res) {
        //Unfinished
    },

    getImagesOfProduct(req, res) {
        //Unfinished
    },

    blankOutImage(req, res) {
        //Unfinished
    }
}