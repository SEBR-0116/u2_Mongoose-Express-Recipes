const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Direction = new Schema(
    {
        step: { type: String, required: true },

    },
    { timestamps: true },
)

module.exports = mongoose.model('directions', Direction)