const express = require('express')
const mongoose = require('mongoose')
const db = require('./db')
const cors = require('cors')

const cuisineTypeController = require('./controllers/cuisineTypeController')
const directionController = require('./controllers/directionController')
const ingredientController = require('./controllers/ingredientController')
const recipeController = require('./controllers/recipeController')

const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/cuisineTypes', cuisineTypeController.getCuisineTypes)
app.get('/cuisineTypes/:id', cuisineTypeController.getCuisineTypeById)
app.post('/cuisineTypes', cuisineTypeController.createCuisineType)
app.put('/cuisineTypes/:id', cuisineTypeController.updateCuisineType)
app.delete('/cuisineTypes/:id', cuisineTypeController.deleteCuisineType)

app.get('/directions', directionController.getDirections)
app.get('/directions/:id', directionController.getDirectionById)
app.post('/directions', directionController.createDirection)
app.put('/directions/:id', directionController.updateDirection)
app.delete('/directions/:id', directionController.deleteDirection)

app.get('/ingredients', ingredientController.getIngredients)
app.get('/ingredients/:id', ingredientController.getIngredientById)
app.post('/ingredients', ingredientController.createIngredient)
app.put('/ingredients/:id', ingredientController.updateIngredient)
app.delete('/ingredients/:id', ingredientController.deleteIngredient)

app.get('/recipes', recipeController.getRecipes)
app.get('/recipes/:id', recipeController.getRecipeById)
app.post('/recipes', recipeController.createRecipe)
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
