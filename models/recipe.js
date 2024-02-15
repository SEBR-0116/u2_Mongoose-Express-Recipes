const mongoose = require('mongoose')
const  { Schema } = require('mongoose')


const Recipe = new Schema(
    {
        name: { type: String, required: true },
        cuisine: { type: Schema.Types.ObjectId, ref:'cuisine' },
        directions: { type: Schema.Types.ObjectId, ref:'direction' },
        ingredients: { type: Schema.Types.ObjectId, ref:'ingredient' },
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('recipe', Recipe)