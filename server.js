const express = require('express');
const db = require('./db');
const cuisineController = require('./controller/cuisineController');
const directionController = require('./controller/directionController');
const ingredientController = require('./controller/ingredientController');
const recipeController = require('./controller/recipeController');
const logger = require('morgan');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'))

app.get('/', (req, res) => res.send('This is our landing page!'));
app.get('/cuisines', cuisineController.getCuisine);
app.get('/directions', directionController.getDirection);
app.get('/ingredients', ingredientController.getIngredient);
app.get('/recipes', recipeController.getRecipe);

app.get('/cuisines/:id', cuisineController.getCuisineById);
app.get('/directions/:id', directionController.getDirectionById);
app.get('/ingredients/:id', ingredientController.getIngredientById);
app.get('/recipes/:id', recipeController.getRecipeById);

app.post('/cuisines', cuisineController.createCuisine)
app.post('/directions', directionController.createDirection)
app.post('/ingredients',  ingredientController.createIngredient)
app.post('/recipes', recipeController.createRecipe)

app.put('/cuisines/:id', cuisineController.updateCuisine)
app.put('/directions/:id', directionController.updateDirection)
app.put('/ingredients/:id',  ingredientController.updateIngredient)
app.put('/recipes/:id', recipeController.updateRecipe)

app.delete('/cuisines/:id', cuisineController.deleteCuisine)
app.delete('/directions/:id', directionController.deleteDirection)
app.delete('/ingredients/:id',  ingredientController.deleteIngredient)
app.delete('/recipes/:id', recipeController.deleteRecipe)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
