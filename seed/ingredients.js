
const db = require('../db');
const Ingredient = require('../models/ingredient');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const ingredients = [
       
        {
            name: 'Tomato',
            unit: 'pcs',
           
        },
        {
            name: 'Chicken',
            unit: 'oz',
           
        },
        {
            name: 'Rice',
            unit: 'cup',
            
        },
    ];


        // Save the updated actor documents
        await Ingredient.insertMany(ingredients)
    }
    const run = async () => {
        await main()
        db.close()
    }
    
    run()