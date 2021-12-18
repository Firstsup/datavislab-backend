const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const teamSchema = new Schema({
    name: {type: String, require: true},
    cover: {type: String, require: true},
    graduate: {type: String},
    research: {type: String},
    email: {type: String},
    introduction: {type: String},
    honor: {type: Array}
})

module.exports = mongoose.model('team', teamSchema, 'team')