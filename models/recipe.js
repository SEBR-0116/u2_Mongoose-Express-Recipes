const mongoose = require('mongoose')
const  { Schema } = require('mongoose')
const IngredientSchema = require('./ingredient').schema;
const DirectionSchema = require('./direction').schema;

const Recipe = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        cuisine: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine' }],
        ingredients: [IngredientSchema],
        directions: [DirectionSchema],
        vegan: { type: Boolean, required: true },
        glutenFree: { type: Boolean, required: true },
        kosher: { type: Boolean, required: true },
        halal: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipe)