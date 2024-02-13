const db = require('../db')
const CuisineType = require('../models/cuisineType')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisineTypes = [
        { type: 'Italian', location: 'Italy', specialDiet: ['Vegetarian', 'Vegan', 'Gluten-Free', `Kosher`] },
    ]
   try{ 
    await CuisineType.insertMany(cuisineTypes)
    console.log("Created cuisine types!")
}
catch (error) {
    console.error(error)
}
}
const run = async () => {
    await main()
    db.close()
}
run()