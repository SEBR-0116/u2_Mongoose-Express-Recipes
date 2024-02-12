const express = require("express");
const db = require("./db");

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");

const app = express();

const logger = require("morgan");
app.use(logger("dev"));
app.use(bodyParser.json());

const controllers = require("./controllers/recipeController");

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => res.send("This is our landing page!"));

app.get("/reviews", controllers.getAllReviews);

app.get("/reviews/:id", controllers.getReview);

app.post("/reviews", controllers.createReview);

app.delete("/reviews/:id", controllers.deleteReview);

app.get("/users", controllers.getAllUsers);

app.get("/users/:id", controllers.getUser);

app.post("/users", controllers.createUser);

app.delete("/users/:id", controllers.deleteUser);

app.get("/recipes", controllers.getAllRecipes);

app.get("/recipes/:id", controllers.getRecipe);

app.post("/recipes", controllers.createRecipe);

app.delete("/recipes/:id", controllers.deleteRecipe);

app.get("/ingredients", controllers.getAllIngredients);

app.get("/ingredients/:id", controllers.getIngredient);

app.post("/ingredients", controllers.createIngredient);

app.delete("/ingredients/:id", controllers.deleteIngredient);
