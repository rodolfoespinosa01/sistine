const { Product, Collection, Tag } = require('../models')

const product_controller = {
    async newProduct(req, res) {
        res.send("Unfinished");
    },
    
    async getProductById(req, res) {
        res.send("Unfinished");
    },

    async getAllProductsByTag(req, res) {
        const tag = req.param.tag;
        
    }
};

const collection_controller = {
    async newCollection(req, res) {
        res.send("Unfinished")
    }

}

const tag_controller = {
    async makeTag(req, res) {
        const tagName = req.body.tag_name
        const existingTag = await Tag.findOne({ tag_name: tagName});
        let tag;
        if (!existingTag) {
            tag = await Tag.create(({ tag_name: tagName }))
        } else {
            tag = existingTag
        }
        res.send(tag)
        return tag;
    }
}
  
module.exports = { product_controller, collection_controller,tag_controller };
  