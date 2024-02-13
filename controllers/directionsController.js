const { Direction } = require('../models')

const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find()
        res.json(directions)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const getOneDirection = async (req, res) => {
    try {
        const { id } = req.params
        const direction = await Direction.findById(id)
        direction ? res.json(direction) : res.status(404).send('Direction find by id error')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllDirections,
    getOneDirection
}