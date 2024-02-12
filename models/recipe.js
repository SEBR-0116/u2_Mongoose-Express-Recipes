const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Recipe = new Schema(
    {
        cuisine_id: { type: Schema.Types.ObjectId, ref: 'cuisine_id'},
        direction_id: { type: Schema.Types.ObjectId, ref: 'cuisine_id'},
        name: {type: String, required:true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('recipes', Recipe)