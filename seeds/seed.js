const mongoose = require('mongoose')
const Cuisine = require('../models/Cuisine')

mongoose.connect('mongodb://localhost/recipeDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err))

const cuisinesData = [
    { name: 'Italian', description: 'Italian cuisine description' },
    { name: 'Mexican', description: 'Mexican cuisine description' },
    { name: 'Indian', description: 'Indian cuisine description' },
]

async function seedCuisines() {
    try {
        await Cuisine.deleteMany()

        await Cuisine.insertMany(cuisinesData)

        console.log('Cuisines seeded successfully')
    } catch (error) {
        console.error('Error seeding cuisines:', error)
    } finally {
        mongoose.disconnect()
    }
}

seedCuisines()
