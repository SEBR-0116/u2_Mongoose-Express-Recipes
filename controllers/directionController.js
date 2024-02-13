const Direction = require('../models/direction');

const getDirection = async (req, res) => {
    try {
        const directions = await Direction.find();
        res.json(directions);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getDirectionById = async (req, res) => {
    try {
        const { id } = req.params;
        const direction = await Direction.findById(id);
        if (!direction) {
            return res.status(404).json({ error: 'Direction not found' });
        }
        res.json(direction);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createDirection = async (req, res) => {
    try {
        const newDirection = await Direction.create(req.body);
        res.status(201).json(newDirection);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data provided' });
    }
};

const updateDirection = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDirection = await Direction.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDirection) {
            return res.status(404).json({ error: 'Direction not found' });
        }
        res.json(updatedDirection);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteDirection = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDirection = await Direction.findByIdAndDelete(id);
        if (!deletedDirection) {
            return res.status(404).json({ error: 'Direction not found' });
        }
        res.json({ message: 'Direction deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getDirection,
    getDirectionById,
    createDirection,
    updateDirection,
    deleteDirection
};