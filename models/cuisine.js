const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Cuisine = new Schema(
    {
        origin: { type: String, required: true },
        glutenFree: { type: Boolean, default: false },
        vegan: { type: Boolean, default: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('cuisine', Cuisine)