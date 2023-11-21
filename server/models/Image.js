const { Schema, model } = require("mongoose");

const imageSchema = new Schema({
    img_name: {
        type: String,
    },
    img_desc: {
        type: String,
    },
    img_data: {
        data: Buffer,
        contentType: String
    },
    uploadedBy: {
        type: Schema.Types.ObjectId, ref: "User"
    }
})

const productImageSchema = {
    product: {
        type: Schema.Types.ObjectId, ref: "Product"
    },
    collection: {
        type: Schema.Types.ObjectId, ref: "Collection"
    },
    image: {
        type: Schema.Types.ObjectId, ref: "Image"
    }
}

const profileImageSchema = {
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    image: {
        type: Schema.Types.ObjectId, ref: "Image"
    }
}

const Image = model("Image", imageSchema)
const ProductImage = model("ProductImage", productImageSchema)
const ProfileImage = model("ProfileImage", profileImageSchema)