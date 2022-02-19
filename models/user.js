const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const userSchema = new Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    name: {type: String, require: true},
    email: {type: String, require: true},
})

module.exports = mongoose.model('user', userSchema, 'user')