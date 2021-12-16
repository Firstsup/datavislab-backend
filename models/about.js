const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const aboutSchema = new Schema({
    item: {type: String, require: true},
    content: {type: String, require: true}
})

module.exports = mongoose.model('about', aboutSchema, 'about')