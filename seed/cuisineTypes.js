const db = require('../db')
const { CuisineType } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const cuisineTypes = [
        {
            name: "Italian",
            recipes: ['65ca4d65343e889a3995afd5']
        },
        {
            name: "Venezuelan",
            recipes: ['65ca4c94c7a855a65e3b930e','65ca4aa09c6c77b2185502f2']
        }
    ]

    await CuisineType.insertMany(cuisineTypes)
    console.log('Cuisines inserted')
}

const run = async () => {
    await main()
    db.close()
}

run()