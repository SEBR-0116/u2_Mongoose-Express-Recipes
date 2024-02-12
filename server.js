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
const Cuisine = require('./models/cuisine')
const Recipe = require('./models/recipe')
const Ingredient = require('./models/ingredient')
const Direction = require('./models/direction')

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

// Route to get all recipes of a specific cuisine, can be lowercase
// Example: "http://localhost:3001/cuisines/chinese/recipes/" will return "General Tso's Chicken" and "Beef and Broccoli"
app.get('/cuisines/:cuisineName/recipes', async (req, res) => {
  try {
    const cuisineName = req.params.cuisineName.toLowerCase();

    const cuisine = await Cuisine.findOne({ name: { $regex: new RegExp(cuisineName, 'i') } })

    if (!cuisine) {
      return res.status(404).send('Cuisine not found')
    }

    const recipes = await Recipe.find({ cuisineId: cuisine._id })

    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message)
  }
});

   
//Route to get a scecific recipe, with associated ingredients and directions
//recipe name can be spaced with "%20" or a hyphen (-), and be lowercase
//Example: "http://localhost:3001/cuisines/mexican/recipes/Chicken-Tamales"
// app.get('/cuisines/:cuisineName/recipes/:recipeName', async (req, res) => {
//   try {
//     const cuisineName = req.params.cuisineName.toLowerCase();
//     const recipeName = req.params.recipeName.replace(/-/g, ' ')

//     const cuisine = await Cuisine.findOne({ name: { $regex: new RegExp(cuisineName, 'i') } });

//     if (!cuisine) {
//       return res.status(404).send('Cuisine not found');
//     }

//     const recipe = await Recipe.findOne({ title: { $regex: new RegExp('^' + recipeName + '$', 'i') }, cuisineId: cuisine._id });

//     if (!recipe) {
//       return res.status(404).send('Recipe not found');
//     }

//     const ingredients = await Ingredient.find({ recipeId: recipe._id })

//     const directions = await Direction.find({ recipeId: recipe._id })

   
//     res.json({ recipe, ingredients, directions })
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// });

app.get('/cuisines/:cuisineName/recipes/:recipeName', async (req, res) => {
  try {
    const cuisineName = req.params.cuisineName.toLowerCase();
    const recipeName = req.params.recipeName;

    // Find the cuisine document by name
    const cuisine = await Cuisine.findOne({ name: { $regex: new RegExp(cuisineName, 'i') } });

    if (!cuisine) {
      return res.status(404).send('Cuisine not found');
    }

    // Find the recipe document by title (case-insensitive) and associated cuisineId
    // Here, we directly use the provided recipe name without modifying it
    const recipe = await Recipe.findOne({ title: { $regex: new RegExp('^' + recipeName + '$', 'i') }, cuisineId: cuisine._id });

    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }

    // Find ingredients associated with the recipe
    const ingredients = await Ingredient.find({ recipeId: recipe._id });

    // Find directions associated with the recipe
    const directions = await Direction.find({ recipeId: recipe._id });

    // Return the recipe along with ingredients and directions
    res.json({ recipe, ingredients, directions });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});