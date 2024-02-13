const { Schema } = require ('mongoose')

const Direction = new Schema (
    {
        steps: { type: String, required: true},
        nutritionFacts: { type: String, required: false},
        familyRatings: { type: Number, required: false},
        recipeId: {type: Schema.Types.ObjectId, defaul:null, ref: 'Recipe'}
    },

    { timestamps: true }
)

module.exports = Direction