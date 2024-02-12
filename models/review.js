const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        recipe: { type: Schema.Types.ObjectId, ref: 'recipe_id'},
        user: { type: Schema.Types.ObjectId, ref: 'user_id' },
        rating: {type: Number, min:1, max:5},
        comment: {type: String}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Review', Review)
