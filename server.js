const express = require('express')
const db = require('./db')
const cuisineController = require('./controllers/cuisineController')
const directionsController = require('./controllers/directionsController')
const ingredientsController = require('./controllers/ingredientsController')
const nutritionController = require('./controllers/nutritionController')

const PORT = process.env.PORT || 3001
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/middleware', (req, res, next) => {
    console.log('this is middleware')
    next() 
},
(req, res) => {
    res.send('response completed')
})

app.get('/', (req, res) => res.send('Lets start our recipe project'))

app.get('/cuisine', cuisineController.getAllCuisines)
app.get('/cuisine/name/:name', cuisineController.getCuisinesByName)
app.get('/cuisine/:id', cuisineController.getCuisineById)
app.post('/cuisine', cuisineController.createCuisine)
app.put('/cuisine/:id', cuisineController.updateCuisine)
app.delete('/cuisine/:id', cuisineController.deleteCuisine)

app.get('/directions', directionsController.getAllDirections)
app.get('/directions/:id', directionsController.getDirectionsById)
app.post('/directions', directionsController.createDirections)
app.put('/directions/:id', directionsController.updateDirections)
app.delete('/directions/:id', directionsController.deleteDirections)


app.get('/ingredients', ingredientsController.getAllIngredients)
app.get('/ingredients/:id', ingredientsController.getIngredientsById)
app.post('/ingredients', ingredientsController.createIngredients)
app.put('/ingredients/:id', ingredientsController.updateIngredients)
app.delete('/ingredients/:id', ingredientsController.deleteIngredients)


app.get('/nutrition', nutritionController.getAllNutritions)
app.get('/nutrition/:id', nutritionController.getNutritionsById)
app.post('/nutrition', nutritionController.createNutritions)
app.put('/nutrition/:id', nutritionController.updateNutritions)
app.delete('/nutrition/:id', nutritionController.deleteNutritions)