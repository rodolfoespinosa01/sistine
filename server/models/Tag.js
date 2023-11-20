const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
    tag_name: {
        type: String,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "ProductTag"
    }]
})

const productTagSchema = {
    tag: {type: Schema.Types.ObjectId, ref: "Tag"},
    product: {type: Schema.Types.ObjectId, ref: "Product"}
    
}

const Tag = model("Tag", tagSchema)
const ProductTag = model("ProductTag", productTagSchema)