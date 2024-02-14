const db = require('../db')
const { Cuisine, Recipe } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const recipes = [
        {
            Servings: 8,
            prepTimeMins: 40,
            cookTime: 30,
            totalTime: 110,
            directions: '65cc1311b06b5ee1753469fe',
            ingredients:'65cc147f9df4be209b8a8582',
            yield: "8 servings",
            cuisine: '65cc10c26d622a2ae47b71ea'
        },
        {
            Servings: 15,
            prepTimeMins: 20,
            cookTime: 100,
            totalTime: 120,
            yield: "15 servings",
            ingredients: '65cc147f9df4be209b8a8583',
            directions:"65cc1311b06b5ee1753469ff",
            cuisine: '65cc10c26d622a2ae47b71ea'
        },
        {
            Servings: 4,
            prepTimeMins: 25,
            cookTime: 5,
            totalTime: 30,
            yield: "4 servings",
            ingredients:'65cc147f9df4be209b8a8584',
            directions:'65cc1311b06b5ee175346a00',
            cuisine: '65cc10c26d622a2ae47b71ea'
        }

    ]

    await Recipe.insertMany(recipes)
    console.log('Created recipes!')
}

const run = async () => {
    try {
        await main();
    } catch (error) {
        console.error('Error running the seed script:', error);
    } finally {
        db.close();
    }
  }
  
  run()