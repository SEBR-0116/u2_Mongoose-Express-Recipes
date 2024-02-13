const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Direction = new Schema(
    {
        stepNumber: {type: Number, required: true},
        description: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('directions', Direction)