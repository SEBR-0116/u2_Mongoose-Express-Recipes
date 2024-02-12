const mongoose = require('mongoose')

const cuisineSchema = new mongoose.Schema({
    name: String,
    description: String
})

module.exports = mongoose.model('Cuisine', cuisineSchema)
