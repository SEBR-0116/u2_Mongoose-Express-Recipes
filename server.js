const express = require('express');
const db = require('./db');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getCuisineTypes, getCuisineTypeById } = require('./controllers/cuisineTypeController');
const { getDirections, getDirectionById } = require('./controllers/directionController');
const { getIngredients, getIngredientById } = require('./controllers/ingredientController');
const { getRecipes, getRecipeById } = require('./controllers/recipeController');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req,res) => {
    res.send("Welcome to my Cookbook!")
})

app.get('/recipes', getRecipes)
app.get('/recipes/:id', getRecipeById)

app.get('/ingredients', getIngredients)
app.get('/ingredients/:id', getIngredientById)

app.get('/cuisines', getCuisineTypes)
app.get('/cuisines/:id', getCuisineTypeById)

app.get('/directions', getDirections)
app.get('/directions/:id', getDirectionById)