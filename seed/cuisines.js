const db = require('../db')
const { Cuisine, Recipe } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisines = [
       
       {
           type: "Blaxicans",
           description: "Blaxicans is mexican and soulfood fusioned together to combine multiple recipes and cultures respectively."
       },
        {
            type: "Mexican",
            description: "Mexican cuisine is a rich and diverse culinary tradition that has evolved over thousands of years, with its earliest roots in Mesoamerican cuisine."
        },
        {
            type: "Soulfood",
            description: "Soul food is a traditional cuisine that originated in the rural South and is closely associated with African American culture.."
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