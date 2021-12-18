const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const prizeSchema = new Schema({
    title: {type: String, require: true},
    date: {type: String, require: true},
    cover: {type: String, require: true}
})

module.exports = mongoose.model('prize', prizeSchema, 'prize')