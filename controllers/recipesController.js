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
  