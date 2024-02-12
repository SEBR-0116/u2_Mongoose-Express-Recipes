const mongoose = require('mongoose')

const directionSchema = new mongoose.Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('Direction', directionSchema)
