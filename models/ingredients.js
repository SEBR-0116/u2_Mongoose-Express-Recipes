const { urlencoded } = require('express')
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Ingredients = new Schema(
    {
        cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
        list: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Ingredient', Ingredients)