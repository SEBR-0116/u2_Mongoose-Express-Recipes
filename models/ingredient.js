const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Ingredient = new Schema(
    {
        name: {type: String, required:true},
        form: {type: String},
        uom: {type: String},
        qty: {type: Number}
    },
    { timestamps: true },
)

module.exports = mongoose.model('ingredients', Ingredient)