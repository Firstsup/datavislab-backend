const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const studentSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, require: true},
    cover: {type: String, require: true},
    graduate: {type: Number, require: true},
    research: {type: String},
    email: {type: String},
    introduction: {type: String}
})

module.exports = mongoose.model('student', studentSchema, 'student')