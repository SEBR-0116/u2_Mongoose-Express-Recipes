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
            cuisine: '65cac33fd5268a65a87c4deb'
        },
        {
            Servings: 15,
            prepTimeMins: 20,
            cookTime: 100,
            totalTime: 120,
            yield: "15 servings",
            cuisine: '65cac33fd5268a65a87c4dec'
        },
        {
            Servings: 4,
            prepTimeMins: 25,
            cookTime: 5,
            totalTime: 30,
            yield: "4 servings",
            cuisine: '65cac33fd5268a65a87c4ded'
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