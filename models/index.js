const mongoose = require('mongoose')
const recipeSchema = require('./recipes')
const directionSchema = require('./directions')
const ingredientSchema = require('./ingredients')

const Recipes = mongoose.model('Recipes', recipeSchema)
const Directions = mongoose.model('Directions', directionSchema)
const Ingredients = mongoose.model('Ingredients', ingredientSchema)

module.exports = {
  Recipes,
  Directions,
  Ingredients
}