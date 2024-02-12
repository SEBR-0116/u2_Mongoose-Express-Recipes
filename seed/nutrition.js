const db = require('../db')
const Nutritions = require('../models/nutrition')
const Cuisine = require('../models/cuisine_type')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Banana = await Cuisine.find( {cuisine_name: 'Banana Bread'}) 
    const EggsBen = await Cuisine.find( {cuisine_name: 'Eggs Benedict'})
    const Velveeta = await Cuisine.find( {cuisine_name: 'Velveeta Spicy Sausage Dip'})

    const nutrition = [
        { 
            cuisine: Banana[0]._id,
            calories: 231,
            fat: 9,
            carbs: 35,
            protein: 4,
        },
        { 
            cuisine: EggsBen[0]._id,
            calories: 879,
            fat: 71,
            carbs: 30,
            protein: 32,
        },
        { 
            cuisine: Velveeta[0]._id,
            calories: 62,
            fat: 5,
            carbs: 2,
            protein: 3,
        }
    ]

    await Nutritions.insertMany(nutrition)
    console.log("Created nutrition facts")

}

const run = async () => {
await main()
db.close()
}

run()