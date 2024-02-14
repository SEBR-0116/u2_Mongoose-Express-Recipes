const { Direction } = require('../models')

const getAllDirections = async (req, res) => {
    try {
        const directions = await Direction.find()
        res.json(directions)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getOneDirection = async (req, res) => {
    try {
        const { id } = req.params
        const direction = await Direction.findById(id)
        direction ? res.json(direction) : res.status(404).send('Direction find by id error')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

const createDirection = async (req, res) => {
    try {
    const direction = await Direction.create(req.body)
    return res.status(201).json({
        direction,
    })
    } catch (e) {
       return res.status(500).json({ error: e.message })
    }
 }
 
 const updateDirection = async (req, res) => {
    try {
       let id = req.params.id
       let direction = await Direction.findByIdAndUpdate(id, req.body, { new: true })
       if (direction) {
          return res.status(200).json(movie)
       }
       throw new Error('Direction not found')
    } catch (e) {
       return res.status(500).send(e.message)
    }
 }
 
 const deleteDirection = async (req, res) => {
    try {
       const id = req.params.id
       let direction = await Direction.findByIdAndDelete(id)
       if (direction) {
          return res.status(200).json(movie)
       }
       throw new Error('Direction not found')
    } catch (e) {
       return res.status(500).send(e.message)
    }
 }

 module.exports = {
    getAllDirections,
    getOneDirection,
    createDirection,
    updateDirection,
    deleteDirection
}