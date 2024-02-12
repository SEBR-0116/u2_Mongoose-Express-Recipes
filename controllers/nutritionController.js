const Nutrition  = require('../models/nutrition')

const getAllNutritions = async (req, res) => {
    try {
        const nutritions = await Nutrition.find().sort('cuisine').populate('cuisine', 'cuisine_name')
        res.json(nutritions)
    } catch (e) {
        return res.status(500).send(e.message);
    } 
}

const getNutritionsById = async (req, res) => {
    try {
        const {id} = req.params
        const nutritions = await Nutrition.findById(id).populate('cuisine', 'cuisine_name')
        if (nutritions) {
            return res.json(nutritions)
        }
       res.status(404).send('Nutrition with the specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createNutritions = async (req, res) => {
    try {
        const nutritions = await new Nutrition(req.body)
        await nutritions.save()
        return res.status(201).json({nutritions})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateNutritions= async (req, res) => {
    try {
        let {id} = req.params
        let nutritions = await Nutrition.findByIdAndUpdate(id, req.body, { new: true } )
        if (nutritions) {
            return res.status(200).json(nutritions)
        }
        throw new Error("Nutrition not found") }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteNutritions = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Nutrition.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Nutrition deleted");
        }
        throw new Error("Nutrition not found");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}


module.exports = {
    getAllNutritions,
    getNutritionsById,
    createNutritions,
    updateNutritions,
    deleteNutritions
}