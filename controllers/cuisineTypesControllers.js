const CuisineType = require('../models/cuisineType')

const getAllCuisineTypes = async (req, res) => {
    try {
        const cuisineTypes = await CuisineType.find()
        res.json(cuisineTypes)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCuisineTypeById = async (req, res) => {
    try {
        const { id } = req.params
        const cuisineType = await CuisineType.findById(id)
        if (cuisineType) {
            return res.json(cuisineType)
        }
        return res.status(404).send('Cuisine type with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createCuisineType = async (req, res) => {
    try {
        const cuisineType = await new CuisineType(req.body)
        await cuisineType.save()
        return res.status(201).json({ cuisineType })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateCuisineType = async (req, res) => {
    try {
        let { id } = req.params
        let cuisineType = await CuisineType.findByIdAndUpdate(id, req.body, { new: true })
        if (cuisineType) {
            return res.status(200).json(cuisineType)
        }
        throw new Error('Cuisine type not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteCuisineType = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await CuisineType.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Cuisine type deleted')
        }
        throw new Error('Cuisine type not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllCuisineTypes,
    getCuisineTypeById,
    createCuisineType,
    updateCuisineType,
    deleteCuisineType
}