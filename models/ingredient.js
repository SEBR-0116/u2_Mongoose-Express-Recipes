const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Ingredient = new Schema(
    {
        item: { type: String, required: true },
        cost : { type: Number, required: true },
        substituteItem: { type: String, required: true },
        recipeId: { type:Schema.Types.ObjectId, ref: 'recipe_id' },
    },
    { timestamps: true },
)

module.exports = mongoose.model('ingredients', Ingredient)
