
const db = require('../db');
const Cuisine = require('../models/cuisine');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const cuisines = [
       
        {
            name: 'Italian',
            description: 'Classic Italian cuisine',
           
        },
        {
            name: 'Indian',
            description: 'Traditional Indian cuisine',
           
        },
        {
            name: 'Chinese',
            description: 'Popular Chinese dishes',
            
        },
    ];


        // Save the updated actor documents
        await Cuisine.insertMany(cuisines)
    }
    const run = async () => {
        await main()
        db.close()
    }
    
    run()