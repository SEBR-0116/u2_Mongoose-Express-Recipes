const { urlencoded } = require('express')
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Directions = new Schema(
    {
        cuisine: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
        steps: { type: Array, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Direction', Directions)