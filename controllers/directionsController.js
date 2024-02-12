const Direction  = require('../models/directions')

const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find().sort('cuisine').populate('cuisine', 'cuisine_name')
        res.json(directions)
    } catch (e) {
        return res.status(500).send(e.message);
    } 
}

const getDirectionsById = async (req, res) => {
    try {
        const {id} = req.params
        const directions = await Direction.findById(id).populate('cuisine', 'cuisine_name')
        if (directions) {
            return res.json(directions)
        }
       res.status(404).send('Direction with the specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createDirections = async (req, res) => {
    try {
        const directions = await new Direction(req.body)
        await directions.save()
        return res.status(201).json({directions})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateDirections= async (req, res) => {
    try {
        let {id} = req.params
        let directions = await Direction.findByIdAndUpdate(id, req.body, { new: true } )
        if (directions) {
            return res.status(200).json(directions)
        }
        throw new Error("Direction not found") }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteDirections = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Direction.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Direction deleted");
        }
        throw new Error("Direction not found");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}


module.exports = {
    getAllDirections,
    getDirectionsById,
    createDirections,
    updateDirections,
    deleteDirections
}