const Cuisine  = require('../models/cuisine_type')

const getAllCuisines = async (req, res) => {
    try {
        const cuisines = await Cuisine.find().sort('cuisine_name')
        res.json(cuisines)
    } catch (e) {
        return res.status(500).send(e.message);
    } 
}

const getCuisinesByName = async (req, res) => {
    try { 
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (e) { 
        return res.status(500).send(e.message)
    }  
}


const getCuisineById = async (req, res) => {
    try {
        const {id} = req.params
        const cuisines = await Cuisine.findById(id)
        if (cuisines) {
            return res.json(cuisines)
        }
       res.status(404).send('Cuisine with the specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createCuisine = async (req, res) => {
    try {
        const cuisines = await new Cuisine(req.body)
        await cuisines.save()
        return res.status(201).json({cuisines})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateCuisine = async (req, res) => {
    try {
        let {id} = req.params
        let cuisines = await Cuisine.findByIdAndUpdate(id, req.body, { new: true } )
        if (cuisines) {
            return res.status(200).json(cuisines)
        }
        throw new Error("Cuisine not found") }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteCuisine = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Cuisine.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Cuisine deleted");
        }
        throw new Error("Cuisine not found");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}



module.exports = {
    getAllCuisines,
    getCuisinesByName,
    getCuisineById,
    createCuisine,
    updateCuisine,
    deleteCuisine
}