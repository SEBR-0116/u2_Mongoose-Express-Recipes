const {Schema} = require('mongoose')

const Ingredient = new Schema(
    {
        needed: { type: String, required: true},
        recipeId: {type: Schema.Types.String, ref: 'Recipe'}
    },

    { timestamps: true }
)

module.exports = Ingredient