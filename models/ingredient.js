const  { Schema } = require('mongoose')

const Ingredient = new Schema(
    {
        name: { type: String, required: true },
        is_vegan: { type: Boolean, required: true, default: false },
        is_kosher: { type: Boolean, required: true, default: false },
        is_keto: { type: Boolean, required: true, default: false },
        quantity_in_oz: { type: Number },
        quantity: { type: Number },
        is_optional: { type: Boolean, required: true, default: false },
    },
    { timestamps: true },
)

module.exports = Ingredient