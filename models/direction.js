const  { Schema } = require('mongoose')

const Direction = new Schema(
    {
        step: { type: Number, required: true },
        description: { type: String, required: true },
        time_estimate: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = Direction