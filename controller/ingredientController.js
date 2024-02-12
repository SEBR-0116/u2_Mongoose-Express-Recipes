const Ingredient = require('../models/ingredient');

const getIngredient = async (req, res) => {
    try {
        const ingredients = await Ingredient.find();
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getIngredientById = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredient = await Ingredient.findById(id);
        if (!ingredient) {
            return res.status(404).json({ error: 'Ingredient not found' });
        }
        res.json(ingredient);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createIngredient = async (req, res) => {
    try {
        const newIngredient = await Ingredient.create(req.body);
        res.status(201).json(newIngredient);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data provided' });
    }
};

const updateIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedIngredient = await Ingredient.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedIngredient) {
            return res.status(404).json({ error: 'Ingredient not found' });
        }
        res.json(updatedIngredient);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedIngredient = await Ingredient.findByIdAndDelete(id);
        if (!deletedIngredient) {
            return res.status(404).json({ error: 'Ingredient not found' });
        }
        res.json({ message: 'Ingredient deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getIngredient,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient
};
