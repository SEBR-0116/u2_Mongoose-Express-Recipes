const { Cuisine } = require('../models')

const getAllCuisines = async (req, res) => {
    try {
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const getOneCuisine = async (req, res) => {
    try {
        const { id } = req.params
        const cuisine = await Cuisine.findById(id)
        cuisine ? res.json(cuisine) : res.status(404).send('Cuisine find by id error')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCuisines,
    getOneCuisine
}