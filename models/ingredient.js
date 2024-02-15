const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Ingredient = new Schema({ 
        name: { type: String, required: true },
        quantity: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('ingredient', Ingredient)