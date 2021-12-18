const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const newsSchema = new Schema({
    id: {type: String, require: true},
    date: {type: String, require: true},
    title: {type: String, require: true},
    content: {type: Array, require: true},
    cover: {type: String, require: true},
})

module.exports = mongoose.model('news', newsSchema, 'news')