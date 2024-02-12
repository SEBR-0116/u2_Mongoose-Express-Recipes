const express = require('express');
const db = require('./db');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getCuisineTypes, getCuisineTypeById, updateCuisineType, deleteCuisineType, createCuisineType } = require('./controllers/cuisineTypeController');
const { getDirections, getDirectionById, updateDirection, deleteDirection, createDirection } = require('./controllers/directionController');
const { getIngredients, getIngredientById, createIngredient, updateIngredient, deleteIngredient } = require('./controllers/ingredientController');
const { getRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('./controllers/recipeController');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', async (req,res) => {
    res.send("Welcome to my Cookbook!")
})

app.get('/recipes', getRecipes)
app.post('/recipes/create', createRecipe)
app.get('/recipes/:id', getRecipeById)
app.put('/recipes/:id/update', updateRecipe)
app.delete('/recipes/:id/delete', deleteRecipe)

app.get('/ingredients', getIngredients)
app.post('/ingredients/create', createIngredient)
app.get('/ingredients/:id', getIngredientById)
app.put('/ingredients/:id/update', updateIngredient)
app.delete('/ingredients/:id/delete', deleteIngredient)

app.get('/cuisines', getCuisineTypes)
app.post('/cuisines/create', createCuisineType)
app.get('/cuisines/:id', getCuisineTypeById)
app.put('/cuisines/:id/update', updateCuisineType)
app.delete('/cuisines/:id/delete', deleteCuisineType)

app.get('/directions', getDirections)
app.post('/directions/create', createDirection)
app.get('/directions/:id', getDirectionById)
app.put('/directions/:id/update', updateDirection)
app.delete('/directions/:id/delete', deleteDirection)

app.get('/*', async (req,res) => {
    res.send('An error has occurred. Try again later (404)')
})