const { Cuisine } = require('../models')

const getAllCuisines = async (req, res) => {
    try {
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const getOneCuisine = async (req, res) => {
    try {
        const { id } = req.params
        const cuisine = await Cuisine.findById(id)
        cuisine ? res.json(cuisine) : res.status(404).send('Cuisine find by id error')
    } catch (e) {
        res.status(500).send(e.message)
    }
   }

    const createCuisine = async (req, res) => {
        try {
        const cuisine = await Cuisine.create(req.body)
        return res.status(201).json({
            cuisine,
        })
        } catch (e) {
           return res.status(500).json({ error: e.message })
        }
     }
     
     const updateCuisine = async (req, res) => {
        try {
           let id = req.params.id
           let cuisine = await Cuisine.findByIdAndUpdate(id, req.body, { new: true })
           if (cuisine) {
              return res.status(200).json(movie)
           }
           throw new Error('Cuisine not found')
        } catch (e) {
           return res.status(500).send(e.message)
        }
     }
     
     const deleteCuisine = async (req, res) => {
        try {
           const id = req.params.id
           let cuisine = await Cuisine.findByIdAndDelete(id)
           if (cuisine) {
              return res.status(200).json(movie)
           }
           throw new Error('Cuisine not found')
        } catch (e) {
           return res.status(500).send(e.message)
        }
     }


module.exports = {
    getAllCuisines,
   getOneCuisine,
   createCuisine,
   updateCuisine,
   deleteCuisine
   }