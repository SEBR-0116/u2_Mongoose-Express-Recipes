const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema(
  {
      name: {type: String, required: true},
      quantity: {
        amount: Number,
        unit: String
      },
      recipeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'},
  },
  {timestamps: true}
)

module.exports = mongoose.model('Ingredient', ingredientSchema)