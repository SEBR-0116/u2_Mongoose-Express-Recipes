const { Recipe} = require('../models')

const getAllRecipes = async (req, res) => {
   try {
      const recipes = await Recipe.find({})
      res.json(recipes)
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const getOneRecipe = async (req, res) => {
   try {
      const { title } = req.params
      const recipe = await Recipe.findOne({title: title})
      .populate('recipes')
      .exec()
      console.log(recipe)
      if (recipe) {
         return res.json(recipe)
        }
        return res.status(404).send('Recipe cannot be found')
     } catch (e) {
        return res.status(500).send(e.message)
     }
  }

  const createRecipe = async (req, res) => {
   try{
   const recipe = await Recipe.create(req.body)
   return res.status(201).json({
      recipe,
   })
   } catch (e) {
      return res.status(500).json({ error: e.message })
   }
}

const updateRecipe = async (req, res) => {
   try {
      let id = req.params.id
      let recipe = await Movie.findByIdAndUpdate(id, req.body, { new: true })
      if (recipe) {
         return res.status(200).json(movie)
      }
      throw new Error('Recipe not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}

const deleteRecipe = async (req, res) => {
   try {
      const id = req.params.id
      let recipe = await Recipe.findByIdAndDelete(id)
      if (recipe) {
         return res.status(200).json(movie)
      }
      throw new Error('Recipe not found')
   } catch (e) {
      return res.status(500).send(e.message)
   }
}
  
  module.exports = {
   getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
  }