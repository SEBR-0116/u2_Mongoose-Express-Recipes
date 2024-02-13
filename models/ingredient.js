const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Ingredient = new Schema(
    {
        name: {type: String, required: true},
        measurement: {type: String},
    },
    {timestamps: true}
)

module.exports = mongoose.model('ingredients', Ingredient)