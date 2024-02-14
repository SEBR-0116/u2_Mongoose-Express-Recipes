const db = require('../db')
const { Recipe, Ingredient } = require('../models');

db.on('error', console.error.bind (console, 'MondoDB connection error:'))

const main = async () => {
    const ingredients = [
        {
            items: [  "1lb of Ground Trukery",  "1packet of Taco seasoning",  "bag of shreddred lettuces",  "16oz block of cheese grated",  "1 half of chopped onions and cilantro"]
        },
        {
            items: [  "1 whole chicken",  "2packet of Burrito seasoning",  "bag of shreddred lettuces",  "16oz block of cheese grated",  "1 green bell pepper, diced", "1 large onion, diced", "3 jalapeno chile peppers, seeded and diced"]
        },
        {
            items: [  "24 raw shrimp (frozen or fresh), peeled and deveined",  "1 cup water", "1 teaspoon bouillon", "1/4 teaspoon cayenne pepper", "8 lime slices", "bag of shreddred lettuces", "1/2 cup Mexican-style crema", "16oz block of cheese grated",  "1 half of chopped onions and cilantro"]
        }
    ]

    await Ingredient.insertMany(ingredients)
    console.log('Created ingredients!')
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
