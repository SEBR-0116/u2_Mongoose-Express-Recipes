const db = require('../db')
const { Recipe, Ingredient } = require('../models');

db.on('error', console.error.bind (console, 'MondoDB connection error:'))

const main = async () => {
    const ingredients = [
        {
            items = ["","",""]
            needed: "1lb of Ground Trukery, 1packet of Taco seasoning, bag of shreddred lettuces, 16oz block of cheese grated, 1 half of chopped onions and cilantro",
            recipeId: '65ca7ea210751f367f1d2de4'
        }
    ]

    await Ingredient.insertMany(ingredinets)
    console.log('Created ingredinets!')
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
