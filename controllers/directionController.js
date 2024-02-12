const express = require('express')
const router = express.Router()
const Direction = require('../models/Direction')

router.get('/', async (req, res) => {
    try {
        const directions = await Direction.find()
        res.json(Directions)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', getDirection, (req, res) => {
    res.json(res.direction)
})

router.post('/', async (req, res) => {
    const direction = new Direction({
        name: req.body.name,
        description: req.body.description
    })

    try {
        const newDirection = await direction.save()
        res.status(201).json(newDirection)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.patch('/:id', getDirection, async (req, res) => {
    if (req.body.name != null) {
        res.direction.name = req.body.name
    }
    if (req.body.description != null) {
        res.direction.description = req.body.description
    }
    try {
        const updatedDirection = await res.direction.save()
        res.json(updatedDirection)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getDirection, async (req, res) => {
    try {
        await res.direction.remove()
        res.json({ message: 'Direction deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getDirection(req, res, next) {
    let direction
    try {
        direction = await Direction.findById(req.params.id)
        if (direction == null) {
            return res.status(404).json({ message: 'Direction not found' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.direction = direction
    next()
}

module.exports = router