const express = require('express')
const mongoose = require('mongoose')
const recipesController = require('./controllers/recipes')
const directionsController = require('./controllers/directions')
const ingredientsController = require('./controllers/ingredients')
const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// Create
app.post('/ingredients', ingredientsController.createIngredient)
app.post('/directions', directionsController.createDirections)
app.post('/recipe', recipesController.createRecipe)

// Read
app.get('/recipes', recipesController.getAllRecipes)
app.get('/ingredients', ingredientsController.getAllIngredients)
app.get('/directions', directionsController.getAllDirections)
app.get('/recipes/name/:name', recipesController.getRecipeDetails)

// update
app.put('/ingredients/:id', ingredientsController.updateIngredient)
app.put('/directions/:id', directionsController.updateDirections)
app.put('/recipes/:id', recipesController.updateRecipes)

// delete
app.delete('/ingredients/:id', ingredientsController.deleteIngredients)
app.delete('/recipes/:id', recipesController.deleteRecipes)
app.delete('/directions/:id', directionsController.deleteDirections)