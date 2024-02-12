const  { Schema } = require('mongoose')

const Recipe = new Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        calories: { type: Number },
        mealType: { type: String },
        ingredients: { type: [{type: Schema.Types.ObjectId, ref: "Ingredient"}], required: true },
        directions: { type: [{type: Schema.Types.ObjectId, ref: "Direction"}], required: true },
        difficulty: { type: Number, required: true, min: 1, max: 5},
    },
    { timestamps: true },
)

module.exports = Recipe