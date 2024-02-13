const { Schema } = require ('mongoose')

const Direction = new Schema (
    {
        steps: { type: String, required: true},
        nutritionFacts: { type: String, required: true},
        familyRatings: { type: Number, required: true},
        recipeId: {type: Schema.Types.ObjectId, ref: 'Recipe'}
    },

    { timestamps: true }
)

module.exports = Direction