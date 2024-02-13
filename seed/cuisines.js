const db = require('../db')
const { Cuisine, Recipe } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisines = [
        {
            type: "Blackexican Turkey Tacos",
            description: "Blaxicans is mexican and soulfood being cooked and seasoned together",
            popular: true
        }
    ]

    await Cuisine.insertMany(cuisines)
    console.log('Created cuisines!')
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