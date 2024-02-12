const mongoose = require('mongoose')
const  { Schema } = require('mongoose')


const Ingredient = new Schema(
    {
        name: { type: String, required: true },
        amount:  { type: Number, required: true },
        unit: { type: String, required: true },

    },
    { timestamps: true },
)

module.exports = mongoose.model('ingredients', Ingredient)