const db = require('../db')
const { Recipe } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const recipes = [
        {
            name: "Italian Pizza",
            author: "Unknown",
            calories: 300, // Example: 300 calories
            mealType: "Main Course",
            ingredients: ['65ca48890322567fb0e92f7e','65ca48890322567fb0e92f7f','65ca48890322567fb0e92f80','65ca48890322567fb0e92f81','65ca48890322567fb0e92f82','65ca48890322567fb0e92f83'],
            directions: ['65ca488cd8890f7139477f4d','65ca488cd8890f7139477f4e','65ca488cd8890f7139477f4f','65ca488cd8890f7139477f50','65ca488cd8890f7139477f51','65ca488cd8890f7139477f52','65ca488cd8890f7139477f53','65ca488cd8890f7139477f54'], // Linking to Direction ObjectIds
            difficulty: 3 // Example: 3 (medium difficulty)
        }
    ]

    await Recipe.insertMany(recipes)
    console.log('Recipes were inserted to database')
}

const run = async () => {
    await main()
    db.close()
}

run()