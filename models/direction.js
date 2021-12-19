const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const directionSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, require: true},
    introduction: {type: String, require: true},
    cover: {type: String, require: true}
})

module.exports = mongoose.model('direction', directionSchema, 'direction')