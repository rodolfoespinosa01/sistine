const { Schema, model } = require("mongoose");

const collectionSchema = new Schema({
    collection_name: {
        type: String,
        required: true
    },
    c_desc: {
        type: String,
        required: true
    },
    seller: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    primaryImage: {
        type: Schema.Types.ObjectId,
        ref: "ProductImage"
    }
})

const Collection = model("Collection", collectionSchema)