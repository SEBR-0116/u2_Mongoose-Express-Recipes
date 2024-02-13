const { Ingredient } = require('../models')

const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find()
        res.json(ingredients)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const getOneIngredient = async (req, res) => {
    try {
        const { id } = req.params
        const ingredient = await Ingredient.findById(id)
        ingredient ? res.json(ingredient) : res.status(404).send('Ingredient find by id error')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllIngredients,
    getOneIngredient
}