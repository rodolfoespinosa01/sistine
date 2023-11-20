const { Schema, model } = require("mongoose");

const directMessageSchema = new Schema({
    subject: {
        type: String
    },
    content: {
        type: String
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    origin: { // First message in a given interaction
        type: Schema.Types.ObjectId,
        ref: "DirectMessage"
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: "DirectMessage"
    }]
})

const Message = model("DirectMessage", directMessageSchema)