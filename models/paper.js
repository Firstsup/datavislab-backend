const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const paperSchema = new Schema({
    id: {type: Number, required: true},
    title: {type: String, require: true},
    venue: {type: String, require: true},
    file: {type: String}
})

module.exports = mongoose.model('paper', paperSchema, 'paper')