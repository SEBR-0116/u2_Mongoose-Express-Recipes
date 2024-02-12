const {Cuisine, Recipe} = require('../models')

const getAllCuisines = async(req, res) => {
    try {
        const cuisines = await Cuisine.find({}).populate({path: 'recipes', select: 'dish'})
        res.json(cuisines)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCuisineById = async(req, res) => {
    try {
        const {id} = req.params
        const cuisine = await Cuisine.findById(id)
        if (cuisine) {
            return res.json(cuisine)
        }
        return res.status(404).send('Cuisine does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCuisineByName = async(req, res) => {
    try {
        const {cuisine} = req.params
        const cuisines = await Cuisine.find({}).populate({path: 'recipes', select: 'dish'})
        const results = cuisines.filter(element => (element.cuisine.toLowerCase().includes(cuisine.toLowerCase())
        ))
        if (results) {
            return res.json(results)
        }
        return res.status(404).send('Cuisine does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCuisineByRegion = async(req, res) => {
    try {
        const {region} = req.params
        const cuisines = await Cuisine.find({}).populate({path: 'recipes', select: 'dish'})
        const results = cuisines.filter((element) => element.regional_varieties.some((regional_varieties) => regional_varieties.toLowerCase().includes(region.toLowerCase())))
        if (results) {
            return res.json(results)
        }
        return res.status(404).send('Cuisine does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createCuisine = async(req, res) => {
    try {
        let allRecipes = []
        if (req.body.recipes) {
            for (let i=0; i<req.body.recipes.length; i++) {
                const recipe = await Recipe.find({dish: req.body.recipes[i]})
                allRecipes = [...allRecipes, recipe[0]._id]
            }
        }
        const cuisine = await new Cuisine({
            cuisine: req.body.cuisine,
            description: req.body.description,
            regional_varieties: req.body.regional_varieties,
            recipes: allRecipes
        })
        await cuisine.save()
        return res.status(201).json({
            cuisine
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

//update
const updateCuisine = async(req, res) => {
    try {
        const {id} = req.params
        let allRecipes = []
        if (req.body.recipes) {
            for (let i=0; i<req.body.recipes.length; i++) {
                const recipe = await Recipe.find({dish: req.body.recipes[i]})
                allRecipes = [...allRecipes, recipe[0]._id]
            }
        }
        const cuisine = await Cuisine.findByIdAndUpdate(id, {
            cuisine: req.body.cuisine,
            description: req.body.description,
            regional_varieties: req.body.regional_varieties,
            recipes: allRecipes
        }, {new: true})
        if (cuisine) {
            return res.status(200).json(cuisine)
        }
        throw new Error('Cuisine not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteCuisine = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await Cuisine.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Cuisine deleted')
        }
        throw new Error('Cuisine not found')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCuisines,
    getCuisineById,
    getCuisineByName,
    getCuisineByRegion,
    createCuisine,
    updateCuisine,
    deleteCuisine
}