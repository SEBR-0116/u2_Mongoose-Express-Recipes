const Ingredient = require('../models/ingredient')

const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find({})
        res.json(ingredients)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getIngredientByID = async (req, res) => {
    try {
        const {id} = req.params
        const ingredient = await Ingredient.findById(id)
        if(ingredient) {
            return res.json(ingredient)
        }
        return res.status(400).send('Ingredient with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllIngredients,
    getIngredientByID
}