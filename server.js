const express = require('express')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

const cuisineController = require('./controllers/cuisineController')
const recipeController = require('./controllers/recipeController')
const ingredientController = require('./controllers/ingredientController')

app.get('/', (req, res) => res.send('recipes database'))

app.get('/cuisines', cuisineController.getAllCuisines)
app.get('/cuisines/id/:id', cuisineController.getCuisineById)
app.get('/cuisines/cuisine/:cuisine', cuisineController.getCuisineByName)
app.get('/cuisines/region/:region', cuisineController.getCuisineByRegion)
app.post('/cuisines', cuisineController.createCuisine)
app.patch('/cuisines/id/:id', cuisineController.updateCuisine)
app.delete('/cuisines/id/:id', cuisineController.deleteCuisine)

app.get('/recipes', recipeController.getAllRecipes)
app.get('/recipes/id/:id', recipeController.getRecipeById)
app.get('/recipes/dish/:dish', recipeController.getRecipeByDish)
app.get('/recipes/courses/:course', recipeController.getRecipeByCourse)
app.get('/recipes/ingredients/:ingredient', recipeController.getRecipeByIngredients)
app.get('/recipes/diet', recipeController.getRecipeByRestriction)
app.post('/recipes', recipeController.createRecipe)
app.patch('/recipes/id/:id', recipeController.updateRecipe)
app.delete('/recipes/id/:id', recipeController.deleteRecipe)

app.get('/ingredients', ingredientController.getAllIngredients)
app.get('/ingredients/id/:id', ingredientController.getIngredientById)
app.get('/ingredients/ingredient/:ingredient', ingredientController.getIngredientByName)
app.post('/ingredients', ingredientController.createIngredient)
app.patch('/ingredients/id/:id', ingredientController.updateIngredient)
app.delete('/ingredients/id/:id', ingredientController.deleteIngredient)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))