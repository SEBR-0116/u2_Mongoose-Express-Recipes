const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const cuisine = new Schema(
    {
        name: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model('cuisine', cuisine)