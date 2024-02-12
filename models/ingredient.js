const {Schema} = require('mongoose')

const Ingredient = new Schema(
    {
        ingredient_name: {type: String, required: true},
        description: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = Ingredient