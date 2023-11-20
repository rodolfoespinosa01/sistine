const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    product_name: {
        type: String,
    },
    prod_desc: {
        type: String,
    },
    price: {
        type: Number
    },
    collection: {
        type: Schema.Types.ObjectId,
        ref: "Collection"
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    productTags: [{
        type: Schema.Types.ObjectId,
        ref: "ProductTag"
    }],
    images: [{
        type: Schema.Types.ObjectId,
        ref: "ProductImage"
    }]
})

const Product = model("Product", productSchema)
