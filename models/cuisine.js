const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Cuisine = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('cuisines', Cuisine)