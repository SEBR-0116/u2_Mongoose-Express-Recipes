const express = require('express')
const db = require('./db')
const cuisinesController = require('./controllers/cuisinesController')
const recipesController = require('./controllers/recipesController')
const ingredientsController = require('./controllers/ingredientsController')
const directionsController = require('./controllers/directionsController')

const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => res.send('Hello World'))
app.get('/cuisines', cuisinesController.getAllCuisines)
app.get('/cuisines/:id', cuisinesController.getOneCuisine)
app.get('/recipes', recipesController.getAllRecipes)
app.get('/recipes/:id', recipesController.getOneRecipe)
app.get('/ingredients', ingredientsController.getAllIngredients)
app.get('/ingredients/:id', ingredientsController.getOneIngredient)
app.get('/directions', directionsController.getAllDirections)
app.get('/directions/:id', directionsController.getOneDirection)

app.listen(PORT, ()=> console.log('Server running!'))