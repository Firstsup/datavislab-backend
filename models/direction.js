const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const directionSchema = new Schema({
    name: {type: String, require: true},
    introduction: {type: String, require: true},
    cover: {type: String, require: true}
})

module.exports = mongoose.model('direction', directionSchema, 'direction')