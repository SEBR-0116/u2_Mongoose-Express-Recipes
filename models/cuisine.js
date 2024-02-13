const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Cuisine = new Schema(
    {
        cuisine: {type: String, required: true},
        isLactoseFree: {type: Boolean},
        isGlutenFree: {type: Boolean},
        isVegetarian: {type: Boolean}
    },
    { timestamps: true },
)

module.exports = mongoose.model('cuisines', Cuisine)