const mongoose = require('mongoose')
const CuisineSchema = require('./cuisine')
const RecipeSchema = require('./recipe')
const DirectionSchema = require('./direction')
const IngredientSchema = require('./ingredient')

const Cuisine  = mongoose.model('Cuisine', CuisineSchema )
const Recipe = mongoose.model('Recipe', RecipeSchema)
const Direction = mongoose.model('Direction', DirectionSchema)
const Ingredient = mongoose.model('Ingredient', IngredientSchema)


module.exports = {
    Cuisine,
    Recipe,
    Direction,
    Ingredient 
} 