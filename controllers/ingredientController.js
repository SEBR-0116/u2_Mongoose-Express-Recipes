const { Ingredient } = require('../models')

const getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find()
        res.json(ingredients)
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getIngredientById = async (req,res) => {
    try {
        const ingredient = await Ingredient.findById(req.params.id)
        if (ingredient) {
            res.json(ingredient)
        }
    } catch (error) {
        return res.status(500).send('Ingredient with the specified ID does not exists');
    }
}

const createIngredient = async (req, res) => {
    try {
        const ingredient = await new Ingredient(req.body)
        await ingredient.save()
        return res.status(201).json({
            ingredient,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateIngredient = async (req, res) => {
    try {
        let { id } = req.params;
        let ingredient = await Ingredient.findByIdAndUpdate(id, req.body, { new: true })
        if (ingredient) {
            return res.status(200).json(ingredient)
        }
        throw new Error("Ingredient not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Ingredient.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Ingredient deleted");
        }
        throw new Error("Ingredient not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {
    getIngredients,
    getIngredientById,
    createIngredient,
    updateIngredient,
    deleteIngredient
}