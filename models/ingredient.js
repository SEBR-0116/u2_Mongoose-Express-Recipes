const { Schema, default: mongoose } = require('mongoose')

const ingredientSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: {type: Number},
    unit: { type: String, required: true },
    recipe_id:{type:Schema.Types.ObjectId,ref:'recipe_id'}
  },
  { timestamps: true }
)

module.exports = ingredientSchema

// const id = new mongoose.Types.Decimal128('3.1415');