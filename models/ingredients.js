const {Schema} = require('mongoose')

const Ingredient = new Schema(
    {
        items:  {type: Array, default: []}
    },

    { timestamps: true }
)

module.exports = Ingredient