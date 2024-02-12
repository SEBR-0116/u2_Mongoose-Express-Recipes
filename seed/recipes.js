const db = require('../db')
const Recipes = require('../models/recipes')

db.on('error', (error) => {
  console.error('MogoDB connection error:', error);
})

const main = async () => {
  const recipes = [
    {
    name: 'Better Than Takeout Orange Chicken',
    cuisine_type: 'Chinese',
    method: 'Pressure cook, Saute',
    difficulty: 'Easy',
    durration: [{
      prep_time: '5 min',
      cook_time: '15 min'
      }],
    serving_size: '4-6 servings'
    },
    {
      name: 'Chicken Paprikash',
      cuisine_type: 'Hungarian',
      method: 'Pressure cook, Saute',
      difficulty: 'Easy',
      durration: [{
        prep_time: '10 min',
        cook_time: '25 min'
        }],
      serving_size: '4 servings'
    },
    {
      name: 'Vegan Cheesy Pasta Bake',
      cuisine_type: 'Italian',
      method: 'Blender, Pressure Cook',
      difficulty: 'Easy',
      durration: [{
        prep_time: '5 min',
        cook_time: '9 min'
        }],
      serving_size: '2 servings'
    },
    {
      name: 'Cheddar, Broccoli, and Baked Potato Chowder',
      cuisine_type: 'American',
      method: 'Pressure cook, Saute',
      difficulty: 'Easy',
      durration: [{
        prep_time: '15 min',
        cook_time: '25 min'
        }],
      serving_size: '6 servings'
    },
    {
      name: 'Italian Sausage and Ricotta Calzone',
      cuisine_type: 'Italian',
      method: 'Air Fry',
      difficulty: 'Easy',
      durration: [{
        prep_time: '15 min',
        cook_time: '30 min'
        }],
      serving_size: '2 servings'
    },
    {
      name: 'Classic Cuban Sandwiches',
      cuisine_type: 'Cuban',
      method: 'Pressure cook, Saute',
      difficulty: 'Medium',
      durration: [{
        prep_time: '0 min',
        cook_time: '55 min'
        }],
      serving_size: '6 servings'
    },
]
  await Recipes.insertMany(recipes)
  console.log('Created recipes')
}

const run = async () => {
  await main()
    db.close()
}

run()