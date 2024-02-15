const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const PORT = process.env.PORT || 3001
const cuisineController = require('./controllers/cuisineControl')
const directionController = require('./controllers/directionControl')
const recipeController = require('./controllers/recipeControl')
const ingredientController = require('./controllers/ingredientControl')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('welcome to our landing page!'))

app.get('/cuisines', cuisineController.getAllCuisines)
app.get('/directions', directionController.getAllDirections)
app.get('/ingredients', ingredientController.getAllIngredients)
app.get('/recipes', recipeController.getAllRecipes)

app.get('/cuisines/:id', cuisineController.getCuisineById)
app.get('/directions/:id', directionController.getDirectionById)
app.get('/ingredients/:id', ingredientController.getIngredientById)
app.get('/recipes/:id', recipeController.getRecipeById)

app.post('/cuisines', cuisineController.createCuisine)
app.post('/directions', directionController.createDirection)
app.post('/ingredients', ingredientController.createIngredient)
app.post('/recipes', recipeController.createRecipe)

app.put('/cuisines/:id', cuisineController.updateCuisine)
app.put('/directions/:id', directionController.updateDirection)
app.put('/ingredients/:id', ingredientController.updateIngredient)
app.put('/recipes/:id', recipeController.updateRecipe)

app.delete('/cuisines/:id', cuisineController.deleteCuisine)
app.delete('/directions/:id', directionController.deleteDirection)
app.delete('/ingredients/:id', ingredientController.deleteIngredient)
app.delete('/recipes/:id', recipeController.deleteRecipe)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))