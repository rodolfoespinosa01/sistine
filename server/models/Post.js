const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        maxLength: 1000,
        trim: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }]
})

const Post = model("Post", postSchema)