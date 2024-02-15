const db = require('../db')
const { Recipe, Cuisine, Ingredient, Direction } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
   //find cuisine
    const lasaganaCuisine = await Cuisine.find({ origin : 'Italian'})
    const chiliCuisine = await Cuisine.find({ origin : 'Mexican'})
    //find ingredients
    const lasagnaIngredients = await Ingredient.
    find({ lasagnaIng })
    const chiliIngredients = await Ingredient.find({ chiliIng })
    //find Directions
    const chiliDirections = await Direction.find({ chiliDir })
    const lasagnaDirections = await Direction.find({ lasagnaDir })
    
    const recipe = [
        { name: 'Lasagna', 
        cuisine: lasaganaCuisine._id,
        ingredients: lasagnaIngredients,
        directions: lasagnaDirections }, 
        { name: 'Chili',
        cuisine: chiliCuisine._id,
        ingredients: chiliIngredients,
        directions: chiliDirections } ]

    await Recipe.insertMany(recipe)
    console.log("Defined Recipe")
}
const run = async () => {
    await main()
    db.close()
}

run()

