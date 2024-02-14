const { Schema } = require ('mongoose')

const Direction = new Schema (
    {
        steps: { type: String, required: true},
        nutritionFacts: { type: String, required: false},
        familyRatings: { type: Number, required: false}
        },

    { timestamps: true }
)

module.exports = Direction