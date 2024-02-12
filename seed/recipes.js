
const db = require('../db');
const Recipe = require('../models/recipe');
const Cuisine = require('../models/cuisine');


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
 
   
        // Assuming you already have some cuisines in your database
        const cuisineIds = ['65ca48ebed3198c1ea5424ed', '65ca48ebed3198c1ea5424ee', '65ca48ebed3198c1ea5424ef']; // Replace with actual cuisine IDs
    
        const recipes = [
          {
            title: 'Vegan Curry',
            description: 'A delicious vegan curry recipe',
            cuisine: cuisineIds[0],
            ingredients: [
              { name: 'Potato', amount: 2, unit: 'pcs' },
              { name: 'Carrot', amount: 1, unit: 'pcs' },
              { name: 'Coconut milk', amount: 1, unit: 'can' }
            ],
            directions: [
              { step: 'Peel and chop potatoes and carrots.' },
              { step: 'In a pot, combine coconut milk, potatoes, and carrots. Cook until vegetables are tender.' },
              { step: 'Serve hot with rice.' }
            ],
            vegan: true,
            glutenFree: true,
            kosher: false,
            halal: true
          },
          {
            title: 'Chicken Alfredo',
            description: 'Classic chicken alfredo pasta recipe',
            cuisine: cuisineIds[1],
            ingredients: [
              { name: 'Chicken breast', amount: 2, unit: 'pcs' },
              { name: 'Fettuccine pasta', amount: 8, unit: 'oz' },
              { name: 'Heavy cream', amount: 1, unit: 'cup' },
              { name: 'Parmesan cheese', amount: 1, unit: 'cup' }
            ],
            directions: [
              { step: 'Cook pasta according to package instructions.' },
              { step: 'In a pan, cook chicken breast until no longer pink. Remove from pan and slice.' },
              { step: 'In the same pan, heat heavy cream. Add parmesan cheese and stir until melted and creamy.' },
              { step: 'Add cooked pasta and chicken to the sauce. Toss to combine and serve hot.' }
            ],
            vegan: false,
            glutenFree: false,
            kosher: false,
            halal: false
          },
          {
            title: 'Vegetable Stir-Fry',
            description: 'Quick and easy vegetable stir-fry recipe',
            cuisine: cuisineIds[2],
            ingredients: [
              { name: 'Broccoli', amount: 1, unit: 'head' },
              { name: 'Bell pepper', amount: 1, unit: 'pcs' },
              { name: 'Mushrooms', amount: 1, unit: 'cup' },
              { name: 'Soy sauce', amount: 2, unit: 'tbsp' }
            ],
            directions: [
              { step: 'Cut broccoli into florets, slice bell pepper, and mushrooms.' },
              { step: 'In a pan, heat oil and add vegetables. Cook until tender-crisp.' },
              { step: 'Add soy sauce and toss to combine. Serve hot.' }
            ],
            vegan: true,
            glutenFree: true,
            kosher: true,
            halal: true
          }
        ];
    
        // Insert recipes into the database
        await Recipe.insertMany(recipes);

        const run = async () => {
          await main()
          db.close()
      }
    }   
      run()