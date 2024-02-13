const mongoose = require('mongoose')
const cousinTypeSchema = require('./cousintype')
const recipesSchema = require('./recipe')
const ingredientSchema = require('./ingredient')
// const directionSchema = require('./direction')


const CousinType = mongoose.model('cousintype',cousinTypeSchema)
const Recipe = mongoose.model('recipe',recipesSchema)
const Ingredient = mongoose.model('ingredient',ingredientSchema)
// const Direction = mongoose.model('direction',directionSchema)


module.exports = {

  CousinType,
  Recipe,
  Ingredient
  // Direction

}
