const db = require('../db')
const Cuisine = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisine = [
        { origin: 'Italian', 
        glutenFree: false,
        vegan: false, },
        { origin: 'Mexican', 
        glutenFree: false,
        vegan: false, }
    ]

    await Cuisine.insertMany(cuisine)
    console.log("Defined Cuisine")
}
const run = async () => {
    await main()
    db.close()
}

run()