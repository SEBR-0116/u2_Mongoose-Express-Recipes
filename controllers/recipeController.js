const Recipe = require('../models/recipe')

const getAllRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe);
        }
        return res.status(404).send('Recipe with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(plant)
        }
        throw new Error("recipe not found")
    } catch (e) {
        return res.status(500).send(error.message);
    }   
}
  

module.exports = {
    getAllRecipes,
    getRecipeById,
    updateRecipe
   
}