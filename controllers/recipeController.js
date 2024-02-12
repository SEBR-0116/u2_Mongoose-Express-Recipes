const express = require('express')
const router = express.Router()
const Recipe = require('../models/Recipe')

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', getRecipe, (req, res) => {
    res.json(res.recipe)
})

router.post('/', async (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        description: req.body.description
    })

    try {
        const newRecipe = await recipe.save()
        res.status(201).json(newRecipe)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/:id', getRecipe, async (req, res) => {
    if (req.body.name != null) {
        res.recipe.name = req.body.name
    }
    if (req.body.description != null) {
        res.recipe.description = req.body.description
    }
    try {
        const updatedRecipe = await res.recipe.save()
        res.json(updatedRecipe)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getRecipe, async (req, res) => {
    try {
        await res.recipe.remove()
        res.json({ message: 'Recipe deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getRecipe(req, res, next) {
    let recipe
    try {
        recipe = await Recipe.findById(req.params.id)
        if (recipe == null) {
            return res.status(404).json({ message: 'Cuisine not found' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.recipe = recipe
    next()
}

module.exports = router
