const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const teacherSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, require: true},
    cover: {type: String, require: true},
    research: {type: String},
    email: {type: String},
    introduction: {type: String},
    honor: {type: Array}
})

module.exports = mongoose.model('teacher', teacherSchema, 'teacher')