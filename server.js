const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const db = require("./db");
const PORT = process.env.PORT || 3001;
const cuisineController = require("./controllers/cuisineController");
const directionController = require("./controllers/directionController");
const ingredientController = require("./controllers/ingredientController");
const recipeController = require("./controllers/recipeController");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => {
  res.send("Welcome to Our Restaurant");
});

app.get("/cuisines", cuisineController.getAllCuisine);
app.get("/cuisines/:id", cuisineController.getCuisineById);
app.post("/cuisines", cuisineController.createCuisine);
app.put("/cuisines", cuisineController.updateCuisine);
app.delete("/cuisines", cuisineController.deleteCuisine);

app.get("/directions", directionController.getAllDirections);
app.get("/directions/:id", directionController.getDirectionsById);
app.post("/directions", directionController.createDirections);
app.put("/directions", directionController.updateDirections);
app.delete("/directions", directionController.deleteDirections);

app.get("/ingredients", ingredientController.getAllIngredients);
app.get("/ingredients/:id", ingredientController.getIngredientsById);
app.post("/ingredients", ingredientController.createIngredients);
app.put("/ingredients", ingredientController.updateIngredients);
app.delete("/ingredients", ingredientController.deleteIngredients);

app.get("/recipes", recipeController.getAllRecipe);
app.get("/recipes/:id", recipeController.getRecipeById);
app.post("/recipes", recipeController.createRecipe);
app.put("/recipes", recipeController.updateRecipe);
app.delete("/recipes", recipeController.deleteRecipe);
