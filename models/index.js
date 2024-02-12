const mongoose = require('mongoose')
const CuisineSchema = require('./cuisine')
const DirectionSchema = require('./direction')
const IngredientSchema = require('./ingredient')
const RecipeSchema = require('./recipe')

const Cuisine = mongoose.model('Cuisine', CuisineSchema)
const Direction = mongoose.model('Direction', DirectionSchema)
const Ingredient = mongoose.model('Ingredient', IngredientSchema)
const Recipe = mongoose.model('Recipe', RecipeSchema)


module.exports = {
    Cuisine,
    Direction,
    Ingredient,
    Recipe
}