const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Recipe = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        cookingTime: { type: String, required: true },
        image: { type: String, required: true },
        cuisineTypeId: { type:Schema.Types.ObjectId, ref: 'cusine_id' }
    },
    { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipe)