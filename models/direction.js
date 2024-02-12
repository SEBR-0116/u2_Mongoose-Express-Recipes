const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Direction = new Schema(
    {
        ingredient_id: { type: Schema.Types.ObjectId, ref: 'ingredient_id'},
        name: {type: String, required: true},
        numberOfSteps: {type: Number},
        orderedDirections: {type: String}
    },
    { timestamps: true },
)

module.exports = mongoose.model('directions', Direction)
//module.exports = Direction