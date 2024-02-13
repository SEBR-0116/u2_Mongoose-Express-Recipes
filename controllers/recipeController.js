const Recipe = require('../models/recipe');

const getRecipe = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createRecipe = async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data provided' });
    }
};

const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
};
