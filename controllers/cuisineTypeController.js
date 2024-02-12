const { CuisineType } = require('../models')

const getCuisineTypes = async (req, res) => {
    try {
        const cuisineTypes = await CuisineType.find()
        res.json(cuisineTypes)
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getCuisineTypeById = async (req,res) => {
    try {
        const cuisineType = await CuisineType.findById(req.params.id)
        if (cuisineType) {
            res.json(cuisineType)
        }
    } catch (error) {
        return res.status(500).send('CuisineType with the specified ID does not exists');
    }
}

const createCuisineType = async (req, res) => {
    try {
        const cuisineType = await new CuisineType(req.body)
        await cuisineType.save()
        return res.status(201).json({
            cuisineType,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateCuisineType = async (req, res) => {
    try {
        let { id } = req.params;
        let cuisineType = await CuisineType.findByIdAndUpdate(id, req.body, { new: true })
        if (cuisineType) {
            return res.status(200).json(cuisineType)
        }
        throw new Error("CuisineType not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCuisineType = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await CuisineType.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("CuisineType deleted");
        }
        throw new Error("CuisineType not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getCuisineTypes,
    getCuisineTypeById,
    createCuisineType,
    updateCuisineType,
    deleteCuisineType
}