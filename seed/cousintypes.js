const db = require('../db')
const { CousinType } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const cousinTypes =[
        {
            name: "Chineese",
            dish: "Dinner",
            category: "Non-Vegitarian",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Breakfast",
            category: "Non-Vegitarian",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Lunch",
            category: "Non-Vegitarian",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Dinner",
            category: "Vegitarian",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Breakfast",
            category: "Vegitarian",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Lunch",
            category: "Vegitarian",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Dinner",
            category: "Vegan",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Breakfast",
            category: "Vegan",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Lunch",
            category: "Vegan",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Dinner",
            category: "Paleo",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Breakfast",
            category: "Paleo",
            continent: "Asia",
            country_origin: "China"
        },
        {
            name: "Chineese",
            dish: "Lunch",
            category: "Paleo",
            continent: "Asia",
            country_origin: "China"
        }
    ]

    await CousinType.insertMany(cousinTypes)
    console.log("Created some Cousin Type")
}

const run = async () => {
    await main()
    db.close()
}

run()