const Recipe = require('../models/recipe')

const getAllRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllRecipes,
}