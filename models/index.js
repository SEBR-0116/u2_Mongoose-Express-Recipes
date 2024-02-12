const mongoose = require('mongoose')
const CuisineSchema = require('./cuisine')
const RecipeSchema = require('./recipe')
const IngredientSchema = require('./ingredient')

const Cuisine = mongoose.model('Cuisine', CuisineSchema)
const Recipe = mongoose.model('Recipe', RecipeSchema)
const Ingredient = mongoose.model('Ingredient', IngredientSchema)

module.exports = {
    Cuisine,
    Recipe,
    Ingredient
}