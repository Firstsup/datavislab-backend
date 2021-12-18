const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const patentSchema = new Schema({
    number: {type: String, require: true},
    title: {type: String, require: true},
    date: {type: String, require: true}
})

module.exports = mongoose.model('patent', patentSchema, 'patent')