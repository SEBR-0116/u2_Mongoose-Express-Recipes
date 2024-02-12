const Ingredient  = require('../models/ingredients')

const getAllIngredients = async (req, res) => {
    try {
        const ingred = await Ingredient.find().sort('cuisine').populate('cuisine', 'cuisine_name')
        res.json(ingred)
    } catch (e) {
        return res.status(500).send(e.message);
    } 
}

const getIngredientsById = async (req, res) => {
    try {
        const {id} = req.params
        const ingred = await Ingredient.findById(id).populate('cuisine', 'cuisine_name')
        if (ingred) {
            return res.json(ingred)
        }
       res.status(404).send('Ingredients with the specified ID does not exist')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createIngredients = async (req, res) => {
    try {
        const ingredients = await new Ingredient(req.body)
        await ingredients.save()
        return res.status(201).json({ingredients})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateIngredients= async (req, res) => {
    try {
        let {id} = req.params
        let ingredients = await Ingredient.findByIdAndUpdate(id, req.body, { new: true } )
        if (ingredients) {
            return res.status(200).json(ingredients)
        }
        throw new Error("Ingredient not found") }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteIngredients = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Ingredient.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Ingredient deleted");
        }
        throw new Error("Ingredient not found");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = {
    getAllIngredients,
    getIngredientsById,
    createIngredients,
    updateIngredients,
    deleteIngredients
}