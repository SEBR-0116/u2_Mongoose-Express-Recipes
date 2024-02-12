const Ingredient = require('../models/ingredient')

const getAllIngredients = async (req, res) => {
    try{
        const ingredients = await Ingredient.find()
        res.json(ingredients)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getIngredientById = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredient = await Ingredient.findById(id)
        if (ingredient) {
            return res.json(ingredient);
        }
        return res.status(404).send('Ingredient with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Ingredient.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Ingredient deleted')
        }
        throw new Error('Plant not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllIngredients,
    getIngredientById,
    deleteIngredient
}