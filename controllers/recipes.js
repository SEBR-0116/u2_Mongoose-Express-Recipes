const Recipes = require('../models/recipes')
const Directions = require('../models/directions')
const Ingredients = require('../models/ingredients')

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

///////////////////////////////////////////////////////

const getRecipeDetails = async (req, res) => {
  try {
    const {name} = req.params
    const regex = new RegExp(name, 'i') // flags for case-insensitive
    const recipe = await Recipes.findOne({ name: {$regex: regex} })

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' })
    }
    // attaches reviews and actors to the result when displayed
    const ingredients = await Ingredients.find({ recipe_id: recipe._id })
    const directions = await Directions.find({ recipe_id: recipe._id })

    const recipeDetails = {
      recipe,
      ingredients,
      directions,
    }

    res.json(recipeDetails)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

///////////////////////////////////////////////////////////

const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipes(req.body)
    await recipe.save()
    return res.status(201).json({
        recipe
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

////////////////////////////////////////////////////////////////

  const updateRecipes = async (req, res) => {
    try {
      let { id } = req.params
      let recipes = await Recipes.findByIdAndUpdate(id, req.body, { new: true})
      if (recipes) {
        return res.status(200).json(recipes)
      }
    } catch (e) {
      return res.status(500).json({ error: error.message})
    }
  }

  ///////////////////////////////////////////////////////////////////

  const deleteRecipes = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipes.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Ingredient deleted");
        }
        throw new Error("Ingredient not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
  }

module.exports = {
  getAllRecipes,
  getRecipeDetails,
  createRecipe,
  updateRecipes,
  deleteRecipes
}