const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Recipe = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        cookTime: {type: String, required: true},
        ingredients:[{type: Schema.Types.ObjectId, ref: 'ingredient_id'}],
        instructions: { type: String, required: true },
        servings:{type: Number, required:true},
        healthy: { type: Boolean, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Recipe', Recipe)
