const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    cuisine_type: {type: String, required: true},
    vegan: {type: Boolean, required: false},
    method: {type: String, required: true},
    difficulty: {type: String, required: true},
    durration: [{
      prep_time: {type: String, required: true},
      cook_time: {type: String, required: true}
    }],
    serving_size: {type: String, required: true}
  },
  {timestamps: true}
)

const Recipes = mongoose.model('Recipes', recipeSchema)

module.exports = Recipes