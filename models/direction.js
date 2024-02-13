const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Direction = new Schema(
    {
    description: { type: String, required: true },
    measurements: { type: String, required: true },
    steps: { type: String, required: true },
    recipeId: { type:Schema.Types.ObjectId, ref: 'recipe_id' }
     },
        { timestamps: true },
    )

    module.exports = mongoose.model('directions', Direction)