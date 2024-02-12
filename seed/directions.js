
const db = require('../db');
const Direction = require('../models/direction');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const directions = [
       
        {
            step: 'Chop tomatoes into small pieces',
           
        },
        {
            step: 'Marinate chicken with spices',

           
        },
        {
            step: 'Cook rice in boiling water',
 
        },
    ];


        // Save the updated actor documents
        await Direction.insertMany(directions)
    }
    const run = async () => {
        await main()
        db.close()
    }
    
    run()