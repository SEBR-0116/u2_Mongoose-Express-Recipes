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
            yield: "8 servings",
            cuisine: '65ca7dcb3193216d25faa403'
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