const { Schema, model } = require("mongoose");

const directMessageSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    origin: { // First message in a given interaction
        type: Schema.Types.ObjectId,
        ref: "DirectMessage"
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: "DirectMessage"
    }]
}, {
    timestamps: true
})

const Message = model("DirectMessage", directMessageSchema)