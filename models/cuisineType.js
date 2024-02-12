const  { Schema } = require('mongoose')

const CuisineType = new Schema(
    {
        name: { type: String, required: true },
        recipes: { type: [{type: Schema.Types.ObjectId, ref: "Recipe"}], required: true },
    },
    { timestamps: true },
)

module.exports = CuisineType