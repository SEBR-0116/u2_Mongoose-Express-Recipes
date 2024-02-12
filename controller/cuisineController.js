const Cuisine = require('../models/cuisine');

const getCuisine = async (req, res) => {
    try {
        const cuisines = await Cuisine.find();
        res.json(cuisines);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getCuisineById = async (req, res) => {
    try {
        const { id } = req.params;
        const cuisine = await Cuisine.findById(id);
        if (!cuisine) {
            return res.status(404).json({ error: 'Cuisine not found' });
        }
        res.json(cuisine);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createCuisine = async (req, res) => {
    try {
        const newCuisine = await Cuisine.create(req.body);
        res.status(201).json(newCuisine);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data provided' });
    }
};

const updateCuisine = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCuisine = await Cuisine.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCuisine) {
            return res.status(404).json({ error: 'Cuisine not found' });
        }
        res.json(updatedCuisine);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteCuisine = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCuisine = await Cuisine.findByIdAndDelete(id);
        if (!deletedCuisine) {
            return res.status(404).json({ error: 'Cuisine not found' });
        }
        res.json({ message: 'Cuisine deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getCuisine,
    getCuisineById,
    createCuisine,
    updateCuisine,
    deleteCuisine
};
