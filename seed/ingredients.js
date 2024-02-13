const db = require('../db')
const Ingredient = require('../models/ingredient')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const SpaghettiCarbonara='65ca759bd33837be9f8b6c1a'
const ChickenAlfredo='65ca759bd33837be9f8b6c1b'
const VegetableLasagna='65ca759bd33837be9f8b6c1c'

const ingredients = [
        // Ingredients for Spaghetti Carbonara
        { item: 'Spaghetti', cost: 2, substituteItem: 'Fettuccine', recipeId: SpaghettiCarbonara },
        { item: 'Eggs', cost: 3, substituteItem: 'Egg substitute', recipeId: SpaghettiCarbonara },
        { item: 'Cheese', cost: 5, substituteItem: 'Vegan cheese', recipeId: SpaghettiCarbonara },
        { item: 'Pancetta', cost: 6, substituteItem: 'Bacon', recipeId: SpaghettiCarbonara },
        // Ingredients for Chicken Alfredo
        { item: 'Fettuccine', cost: 2, substituteItem: 'Spaghetti', recipeId: ChickenAlfredo },
        { item: 'Chicken', cost: 8, substituteItem: 'Tofu', recipeId: ChickenAlfredo },
        { item: 'Parmesan sauce', cost: 4, substituteItem: 'Cashew sauce', recipeId: ChickenAlfredo },
        // Ingredients for Vegetable Lasagna
        { item: 'Lasagna noodles', cost: 3, substituteItem: 'Zucchini slices', recipeId: VegetableLasagna },
        { item: 'Vegetables', cost: 5, substituteItem: 'Different vegetables', recipeId: VegetableLasagna },
        { item: 'Cheese', cost: 5, substituteItem: 'Vegan cheese', recipeId: VegetableLasagna },
    ];
    
    // Insert ingredients into the database
    try {
        await Ingredient.insertMany(ingredients)
        console.log("Created ingridients!")
    } catch (error) {
        console.error(error)
    }
}

const run = async () => {
    await main()
    db.close()
}

run()