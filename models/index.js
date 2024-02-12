const mongoose = require('mongoose')
const cuisineTypeSchema = require('./cuisineType')
const recipeSchema = require('./recipe')
const ingredientSchema = require('./ingredient')
const directionSchema = require('./direction')

const CuisineType = mongoose.model('CuisineType', cuisineTypeSchema, "cuisines")
const Recipe = mongoose.model('Recipe', recipeSchema, 'recipes')
const Ingredient = mongoose.model('Ingredient', ingredientSchema, 'ingredients')
const Direction = mongoose.model('Direction', directionSchema, 'directions')

module.exports = {
    CuisineType,
    Recipe,
    Ingredient,
    Direction
}

