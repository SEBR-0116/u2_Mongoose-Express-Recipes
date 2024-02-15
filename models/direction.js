const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Direction = new Schema(
    {   
        step: { type: Number, required: true},
        action: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('direction', Direction)