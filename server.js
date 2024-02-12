const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const cuisineController = require('./controllers/cuisineController')
const recipeController = require('./controllers/recipeController')
const ingredientController = require('./controllers/ingredientController')
const directionController = require('./controllers/directionController')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Let's make some food!")
  })

app.get('/cuisines', cuisineController.getAllCuisines)

app.get('/recipes', recipeController.getAllRecipes)

app.get('/ingredients', ingredientController.getAllIngredients)

app.get('/directions', directionController.getAllDirections)