const db = require('../db')
const Recipe = require('../models/recipe')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const italianId ='65ca7577ae51af8f5f1be9d5'

const recipes = [
    { 
        name: 'Spaghetti Carbonara', 
        description: 'Spaghetti Carbonara is a classic pasta dish from Rome made with eggs, cheese, pancetta and pepper. Spaghetti pasta is tossed in the pan with the pancetta and bacon fat then the eggs and cheese are added to create a creamy sauce.',
        cookingTime: '30 minutes',
        image: `https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg`,
        cuisineTypeId: italianId,
    },
    { 
        name: 'Chicken Alfredo',
        description: 'Chicken Alfredo is a classic Italian-American dish made with cooked fettuccine pasta and tossed in a creamy parmesan sauce. It is often served with grilled chicken, shrimp or broccoli.',
        cookingTime: '30 minutes',
        image: `https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg`,
        cuisineTypeId: italianId,
    },
    { 
        name: 'vegetable lasagna',
        description: 'Vegetable lasagna is a vegetarian version of the classic Italian lasagna made with layers of vegetables, cheese, and lasagna noodles.',
        cookingTime: '1 hour',
        image: `https://www.inspiredtaste.net/wp-content/uploads/2016/10/Easy-Vegetable-Lasagna-Recipe-1200.jpg`,
        cuisineTypeId: italianId,
    },
]

    // Insert recipes into the database
    try {
        await Recipe.insertMany(recipes)
        console.log("Created recipes!")
    } catch (error) {
        console.error(error)
    }
}

const run = async () => {
    await main()
    db.close()
}

run()
 