const router = require("express").Router();

const { product_controller, collection_controller, tag_controller } = require("../controllers/prod_coll_tag_controller.js");

//POST(/tag): Create a new tag
router.post("/tag", tag_controller.makeTag);

//POST(/product): Create a new product
//POST(/collection): Create a set of new products, all within one collection. Can't create an empty collection.

//GET(/product/:product_id): Find a particular product
//GET(/tag/:tag_name): Find all products with a particular tag
//GET(/collection/:collection_id): Find a collection and all products within it

//PUT(/product/:product_id): Update a product.
//PUT(/collection/:collection_id): Update a collection.

//DELETE(/product/:product_id): Delete a product. (If a product is sold, use PUT route instead.)
//DELETE(/collection/:collection_id): Delete a collection. (If all products in a collection are sold, use PUT route instead.)

module.exports = router;
