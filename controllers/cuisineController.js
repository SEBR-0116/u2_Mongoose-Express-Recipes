const Cuisine = require('../models/cuisine')

const getAllCuisines = async (req, res) => {
    try{
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCuisines,
}