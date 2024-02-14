const mongoose = require('mongoose')
const cuisineSchema = require('./cuisines')
const recipeSchema = require('./recipes')
const ingredientSchema = require('./ingredients')
const directionSchema = require('./directions')

const Cuisine = mongoose.model('Cuisines', cuisineSchema)
const Recipe = mongoose.model('Recipes', recipeSchema)
const Ingredient = mongoose.model('Ingredients', ingredientSchema)
const Direction = mongoose.model('Directions', directionSchema)


module.exports = {
  Cuisine,
  Recipe,
  Ingredient,
  Direction
}