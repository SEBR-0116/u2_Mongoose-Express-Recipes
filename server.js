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
app.create('/cuisines/:id', cuisinesController.createCuisine)
app.update('/cuisines/:id', cuisinesController.updateCuisine)
app.delete('/cuisines/:id', cuisinesController.deleteCuisine)



app.get('/recipes', recipesController.getAllRecipes)
app.get('/recipes/:id', recipesController.getOneRecipe)
app.delete('/recipes/:id', recipesController.deleteRecipe)
app.create('/recipes/:id', recipesController.createRecipe)
app.update('/recipes/:id', recipesController.updateRecipe)


app.get('/ingredients', ingredientsController.getAllIngredients)
app.get('/ingredients/:id', ingredientsController.getOneIngredient)
app.delete('/ingredients/:id', ingredientsController.deleteIngredient)
app.create('/ingredients/:id', ingredientsController.createIngredient)
app.update('/ingredients/:id', ingredientsController.updateIngredient)

app.get('/directions', directionsController.getAllDirections)
app.get('/directions/:id', directionsController.getOneDirection)
app.delete('/directions/:id', directionsController.deleteDirection)
app.create('/directions/:id', directionsController.createDirection)
app.update('/directions/:id', directionsController.updateDirection)

app.listen(PORT, ()=> console.log('Server running!'))