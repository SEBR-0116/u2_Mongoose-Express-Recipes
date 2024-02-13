const db = require('../db')
const Cuisine = require('../models/cuisine')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisine = [
        {name: 'Southern'}
    ]

    await Cuisine.insertMany(cuisine)
    console.log("Created some cuisine")
}

const run = async () => {
    await main()
    db.close()
}

run ()

