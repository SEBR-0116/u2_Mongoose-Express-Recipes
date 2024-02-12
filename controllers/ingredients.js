const Ingredients = require('../models/ingredients')

const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredients.find();
    res.json(ingredients)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

////////////////////////////////////////////////////////////

const createIngredient = async (req, res) => {
  try {
    const { recipe_id, ingredient } = req.body
    if (!recipe_id || !ingredient) {
      return res.status(400).json({ error: 'Recipe ID and ingredient are required' })
    }

    // Find the first available empty slot in the ingredient list of the specified recipe
    const existingIngredients = await Ingredients.findOne({ recipe_id })
    let emptySlot = 1

    while (existingIngredients[`ingredient${emptySlot}`] !== undefined) {
      emptySlot++
    }

    // Create the new ingredient in the first available slot
    const updatedIngredients = {
      ...existingIngredients.toObject(),
      [`ingredient${emptySlot}`]: ingredient,
    }

    const result = await Ingredients.findOneAndUpdate(
      { recipe_id },
      updatedIngredients,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )

    return res.status(201).json({ ingredient: result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message })
    }
    return res.status(500).json({ error: error.message })
  }
}

//////////////////////////////////////////////////////////////

const updateIngredient = async (req, res) => {
  try {
    let { id } = req.params
    let ingredient = await Ingredients.findByIdAndUpdate(id, req.body, { new: true})
    if (ingredient) {
      return res.status(200).json(ingredient)
    }
  } catch (e) {
    return res.status(500).json({ error: error.message})
  }
}

/////////////////////////////////////////////////////////////

const deleteIngredients = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Ingredients.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Ingredient deleted");
      }
      throw new Error("Ingredient not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports = {
  createIngredient,
  getAllIngredients,
  updateIngredient,
  deleteIngredients
}