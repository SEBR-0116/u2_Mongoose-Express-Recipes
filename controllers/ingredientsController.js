const { Ingredient } = require('../models')

const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find()
        res.json(ingredients)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const getOneIngredient = async (req, res) => {
    try {
        const { id } = req.params
        const ingredient = await Ingredient.findById(id)
        ingredient ? res.json(ingredient) : res.status(404).send('Ingredient find by id error')
    } catch (e) {
        res.status(500).send(e.message)
    }
}
const createIngredient = async (req, res) => {
    try {
    const ingredient = await Ingredient.create(req.body)
    return res.status(201).json({
        ingredient,
    })
    } catch (e) {
       return res.status(500).json({ error: e.message })
    }
 }

const updateIngredient = async (req, res) => {
    try {
       let id = req.params.id
       let ingredient = await Ingredient.findByIdAndUpdate(id, req.body, { new: true })
       if (ingredient) {
          return res.status(200).json(movie)
       }
       throw new Error('Ingredient not found')
    } catch (e) {
       return res.status(500).send(e.message)
    }
 }
 
 const deleteIngredient = async (req, res) => {
    try {
       const id = req.params.id
       let ingredient = await Cuisine.findByIdAndDelete(id)
       if (ingredient) {
          return res.status(200).json(movie)
       }
       throw new Error('Ingredient not found')
    } catch (e) {
       return res.status(500).send(e.message)
    }
 }
module.exports = {
    getAllIngredients,
    getOneIngredient,    
    createIngredient,
    updateIngredient,
    deleteIngredient
}
