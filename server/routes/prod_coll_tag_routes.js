const router = require("express").Router();

const { product_controller, collection_controller, tag_controller } = require("../controllers/prod_coll_tag_controller.js");

//POST(/product): Create a new product
router.post("/product", product_controller.newProduct)

//POST(/collection): Create a set of new products, all within one collection. Can't create an empty collection.
router.post("/collection", collection_controller.newCollection)

//POST(/tag): Create a new tag
router.post("/tag", tag_controller.newTag);

//GET(/tag/:tag_name): Find all products with a particular tag
router.get('/tag/:tag_name', tag_controller.getAllProductsByTag)

//GET(/product/:product_id): Find a particular product
//PUT(/product/:product_id): Update a product.
//DELETE(/product/:product_id): Delete a product. (If a product is sold, use PUT route instead.)
router.route('/product/:product_id')
    .get(product_controller.getProductById)
    .put(product_controller.updateProductById)
    .delete(product_controller.deleteProductById)

//GET(/collection/:collection_id): Find a collection and all products within it
//PUT(/collection/:collection_id): Update a collection.
//DELETE(/collection/:collection_id): Delete a collection. (If all products in a collection are sold, use PUT route instead.)
router.route('/collection/:collection_id')
    .get(collection_controller.getCollectionById)
    .put(collection_controller.updateCollectionById)
    .delete(collection_controller.deleteCollectionById)


module.exports = router;
