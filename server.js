const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3001
const directionController = require('./controllers/directionController')
const recipieController = require('./controllers/recipieController')
const ingredientController = require('./controllers/ingredientController')
const cuisineController = require('./controllers/cuisineController')
const ingredient = require('./models/ingredient')
const cuisine = require('./models/cuisine')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log('connected'))

app.get('/', (req, res) => res.send('welcome to my page'))


app.get('/directions', directionController.getAllDirections)
app.get('/directions/:id', directionController.getDirectionByID)
app.delete('directions/:id', directionController.deleteDirection)


app.get('/recipies', recipieController.getAllRecipies)
app.get('/recipies/:id', recipieController.getRecipieByID)
app.delete('recipies/:id', recipieController.deleteRecipie)
app.put('/recipies/:id', recipieController.updateRecipie)



app.get('/ingredients', ingredientController.getAllIngredients)
app.get('/ingredients/:id', ingredientController.getIngredientByID)


app.get('/cuisine', cuisineController.getAllCuisine)
app.get('/cuisine/:id', cuisineController.getCuisineByID)
app.post('/cuisine', cuisineController.createCuisine)