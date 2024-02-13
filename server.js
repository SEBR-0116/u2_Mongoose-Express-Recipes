const express = require('express')
const db = require('./db')
const cors = require('cors')
const cuisineTypeController = require('./controllers/cuisineTypesControllers')
const recipeController = require('./Controllers/recipesControllers')
const ingredientController = require('./controllers/ingredientsControllers')
const directionController = require('./controllers/directionsControllers')
const PORT = process.env.PORT || 3001

const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("welcome to my page")
})
// CuisineType routes
app.get('/cuisineTypes', cuisineTypeController.getAllCuisineTypes)
app.get('/cuisineTypes/:id', cuisineTypeController.getCuisineTypeById)
app.post('/cuisineTypes', cuisineTypeController.createCuisineType)
app.put('/cuisineTypes/:id', cuisineTypeController.updateCuisineType)
app.delete('/cuisineTypes/:id', cuisineTypeController.deleteCuisineType)

app.get('/recipes', recipeController.getAllRecipes)
app.get('/recipes/:id', recipeController.getRecipeById)
app.post('/recipes', recipeController.createRecipe)
app.put('/recipes/:id', recipeController.updateRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)

app.get('/ingredients', ingredientController.getAllIngredients)
app.get('/ingredients/:id', ingredientController.getIngredientById)
app.post('/ingredients', ingredientController.createIngredient)
app.put('/ingredients/:id', ingredientController.updateIngredient)
app.delete('/ingredients/:id', ingredientController.deleteIngredient)

app.get('/directions', directionController.getAllDirections)
app.get('/directions/:id', directionController.getDirectionById)
app.post('/directions', directionController.createDirection)
app.put('/directions/:id', directionController.updateDirection)
app.delete('/directions/:id', directionController.deleteDirection)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
