const recipie = require('../models/recipie')
const Recipie = require('../models/recipie')

const getAllRecipies = async (req, res) => {
    try {
        const recipies = await Recipie.find({})
        res.json(recipies)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getRecipieByID = async (req, res) => {
    try {
        const {id} = req.params
        const recipies = await Recipie.findById(id)
        if(recipie) {
            return res.json(recipie)
        }
        return res.status(400).send('Recipie with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteRecipie = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Recipie.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send("Recipie deleted")
        }
        throw new Error("Recipie not found")
    } catch (console) {
        return res.status(500).send(error.message)
    }
}

const updateRecipie = async (req, res) => {
    try {
        const recipie = await new Recipie(req.body)
        await recipie.save()
        return res.status(201).json({
            recipie,
        })
    }
    catch(error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getAllRecipies,
    getRecipieByID,
    deleteRecipie,
    updateRecipie
}