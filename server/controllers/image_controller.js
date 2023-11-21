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
        const image = Image.findOne({where: {_id: req.params.image_id}})
        res.json(image)
    },

    getImagesByUser(req, res) {
        const images = Image.find({where: {uploadedBy: req.params.user_id}})
        res.json(images)
    },

    getImagesOfProduct(req, res) {
        const images = Image.find({where: {product: req.params.product_id}})
        res.json(images)
    },

    blankOutImage(req, res) {
        const blank = Image.findOne({name: 'blankImage'})
        const image = Image.updateOne({_id: req.params.image_id}, {img_data: blank.img_data})
        res.json(image)
    }
}

module.exports = {image_controller}