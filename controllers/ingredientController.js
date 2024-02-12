const Ingredient = require('../models/ingredient')

const getAllIngredients = async (req, res) => {
    try{
        const ingredients = await Ingredient.find()
        res.json(ingredients)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllIngredients,
}