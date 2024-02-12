const express = require('express')
const router = express.Router()
const Cuisine = require('../models/Cuisine')

router.get('/', async (req, res) => {
    try {
        const cuisines = await Cuisine.find()
        res.json(cuisines)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', getCuisine, (req, res) => {
    res.json(res.cuisine)
})

router.post('/', async (req, res) => {
    const cuisine = new Cuisine({
        name: req.body.name,
        description: req.body.description
    })

    try {
        const newCuisine = await cuisine.save()
        res.status(201).json(newCuisine)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/:id', getCuisine, async (req, res) => {
    if (req.body.name != null) {
        res.cuisine.name = req.body.name
    }
    if (req.body.description != null) {
        res.cuisine.description = req.body.description
    }
    try {
        const updatedCuisine = await res.cuisine.save()
        res.json(updatedCuisine)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getCuisine, async (req, res) => {
    try {
        await res.cuisine.remove()
        res.json({ message: 'Cuisine deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getCuisine(req, res, next) {
    let cuisine
    try {
        cuisine = await Cuisine.findById(req.params.id)
        if (cuisine == null) {
            return res.status(404).json({ message: 'Cuisine not found' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.cuisine = cuisine
    next()
}

module.exports = router
