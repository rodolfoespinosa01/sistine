const { Product, Collection, Tag } = require('../models')

const product_controller = {
    async newProduct(req, res) {
        try {
            const productData = req.body;
            const newProduct = await Product.create({
                ...productData,
                seller: req.user._id
            });

            req.user.products.push(newProduct._id);
            req.user.save();
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message })
        }
    },
    
    async getProductById(req, res) {
        const product = await Product.findOne({where: { _id: req.params.product_id}})
            .populate('collection')
            .populate('seller')
            .populate('productTags')
            .populate('images')
        
        res.json(product)
    },

    async updateProductById(req, res) {
        try {
            const product = await Product.findOneAndUpdate({where: { _id: req.params.product_id}})
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: err.message })
        }
    },

    async deleteProductById(req, res) {
        try {
            const product = await Product.findOneAndDelete({where: {_id: req.params.product_id}})
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: err.message })
        }
    }
};

const collection_controller = {
    async newCollection(req, res) {
        try {
            const productData = req.body.products; // Get data for new products
            let productIDs = [];
            if (req.body.productIDs) //If any preexisting products have their IDs included
                productIDs.push(req.body.productIDs)
            await productData.forEach((product) => {
                const newProduct = Product.create({
                    ...product,
                    seller: req.user._id
                });
                productIDs.push(newProduct._id)
            });
            
            const newCollection = await Collection.create({
                collection_name: req.body.collection_name,
                c_desc: req.body.c_desc,
                products: productIDs,
                seller: req.user._id
            })
                

            req.user.collections.push(newCollection._id);
            req.user.save();
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message })
        }
    },

    getCollectionById(req, res) {
        const collection = Collection.findOne({ where: { _id: req.params.collection_id}})
            .populate('User')
            .populate('Products')
            .populate('primaryImage')

        res.json(collection)
    },

    updateCollectionById(req, res) {
        try {
            const collection = Collection.findOneAndUpdate({ where: { _id: req.params.collection_id}})
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message})
        }
    },

    deleteCollectionById(req, res) {
        try {
            const collection = Collection.findOneAndDelete({ where: { _id: req.params.collection_id}})
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: err.message})
        }
    }
}

const tag_controller = {
    async newTag(req, res) {
        const tagName = req.body.tag_name
        const existingTag = await Tag.findOne({ tag_name: tagName});
        let tag;
        if (!existingTag) {
            tag = await Tag.create(({ tag_name: tagName }))
        } else {
            tag = existingTag
        }
        res.json(tag)
        return tag;
    },
    

    async getAllProductsByTag(req, res) {
        const matchingProducts = await Product.findAll({ where: { tag_name: req.params.tag_name}}).populate('images')
        if (!matchingProducts)
            res.send('No products with that tag.')
        else {
            res.json(matchingProducts)
        }
    }
}
  
module.exports = { product_controller, collection_controller,tag_controller };
  