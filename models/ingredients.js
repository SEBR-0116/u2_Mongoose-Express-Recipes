const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema(
  {
    ingredient1: {type: String, required: true},
    ingredient2: {type: String, required: true},
    ingredient3: {type: String, required: true},
    ingredient4: {type: String, required: true},
    ingredient5: {type: String, required: true},
    ingredient6: {type: String, required: false},
    ingredient7: {type: String, required: false},
    ingredient8: {type: String, required: false},
    ingredient9: {type: String, required: false},
    ingredient10: {type: String, required: false},
    ingredient11: {type: String, required: false},
    ingredient12: {type: String, required: false},
    ingredient13: {type: String, required: false},
    ingredient14: {type: String, required: false},
    ingredient15: {type: String, required: false},
    ingredient16: {type: String, required: false},
    ingredient17: {type: String, required: false},
    recipe_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipes', required: true}
  },
  {timestamps: true}
)

const Ingredients = mongoose.model('Ingredients', ingredientSchema)

module.exports = Ingredients