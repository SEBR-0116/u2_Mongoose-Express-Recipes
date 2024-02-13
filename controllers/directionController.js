const direction = require('../models/direction')
const Direction = require('../models/direction')

const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find({})
        res.json(directions)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getDirectionByID = async (req, res) => {
    try {
        const {id} = req.params
        const direction = await Direction.findById(id)
        if(direction) {
            return res.json(direction)
        }
        return res.status(400).send('Direction with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteDirection = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Direction.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Direction deleted")
        }
        throw new Error("Direction not found")
    } catch (console) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllDirections,
    getDirectionByID,
    deleteDirection
}