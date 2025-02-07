const { Schema, model } = require("mongoose")

const PostSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    picture: { type: String }
}, { timestamps: true })

module.exports = model("POST", PostSchema)