const { Recipe } = require('../models')

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate(['ingredients','directions'])
        res.json(recipes)
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getRecipeById = async (req,res) => {
    try {
        const recipe = await Recipe.findById(req.params.id).populate(['ingredients','directions'])
        if (recipe) {
            res.json(recipe)
        }
    } catch (error) {
        return res.status(500).send('Recipe with the specified ID does not exists');
    }
}

const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.status(201).json({
            recipe,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateRecipe = async (req, res) => {
    try {
        let { id } = req.params;
        let recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true })
        if (recipe) {
            return res.status(200).json(recipe)
        }
        throw new Error("Recipe not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Recipe deleted");
        }
        throw new Error("Recipe not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}