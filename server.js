const express = require('express')
const mongoose = require('mongoose')
const cuisineController = require('./controllers/cuisineController')
const recipeController = require('./controllers/recipeController')
const ingredientController = require('./controllers/ingredientController')
const directionController = require('./controllers/directionController')

const app = express()

app.use(express.json())

app.use('/cuisines', cuisineController)
app.use('/recipes', recipeController)
app.use('/ingredients', ingredientController)
app.use('/directions', directionController)

mongoose.connect('mongodb://localhost/recipeDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
