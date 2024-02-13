const Cuisine = require('../models/cuisine')

const getAllCuisine = async (req, res) => {
    try {
        const cuisine = await Cuisine.find({})
        res.json(cuisine)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCuisineByID = async (req, res) => {
    try {
        const {id} = req.params
        const cuisine = await Cuisine.findById(id)
        if(cuisine) {
            return res.json(cuisine)
        }
        return res.status(400).send('Cuisine with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createCuisine = async (req, res) => {
    try {
        const cuisine = await new Cuisine(req.body)
        await cuisine.save()
        return res.status(201).json({
            cuisine,
        })
    }
    catch(error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllCuisine,
    getCuisineByID,
    createCuisine
}