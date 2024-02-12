const Direction = require('../models/direction')

const getAllDirections = async (req, res) => {
    try{
        const directions = await Direction.find()
        res.json(directions)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllDirections,
}