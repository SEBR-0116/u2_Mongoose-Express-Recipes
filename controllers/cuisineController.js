const Cuisine = require('../models/cuisine')

const getAllCuisines = async (req, res) => {
    try{
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


const createCuisine = async (req, res) => {
    try {
        const cuisine = await new Cuisine(req.body)
        await cuisine.save()
        return res.status(201).json({
            cuisine,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllCuisines,
    createCuisine
}