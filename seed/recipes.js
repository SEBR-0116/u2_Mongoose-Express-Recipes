const db = require('../db')
const Recipe = require('../models/recipe')
const Cuisine = require('../models/cuisine')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const italianCuisine = await Cuisine.find({name: 'Italian'})
    const mexicanCuisine = await Cuisine.find({name: 'Mexican'})
    const chineseCuisine = await Cuisine.find({name: 'Chinese'})

    const recipes = [
        {
            title: "Spaghetti and Meatballs",
            description: "Classic Italian-American dish featuring pasta, savory meatballs, tomato sauce, and grated cheese, a comfort food favorite.",
            vegan: false,
            kosher: false,
            gluten_free: false,
            cuisineId: italianCuisine[0]._id,
        },
        {
            title: "Margherita Pizza",
            description: "Classic Italian pie topped with tomato sauce, mozzarella cheese, fresh basil, olive oil, and a hint of garlic.",
            vegan: false,
            kosher: false,
            gluten_free: false,
            cuisineId: italianCuisine[0]._id,
        },
        {
            title: "Chicken Enchiladas",
            description: "Tender chicken, wrapped in corn tortillas, smothered in enchilada sauce, topped with cheese, baked to perfection.",
            vegan: false,
            kosher: false,
            gluten_free: false,
            cuisineId: mexicanCuisine[0]._id,
        },
        {
            title: "Chicken Tamales",
            description: "Tender shredded chicken encased in corn masa dough, steamed in corn husks, creating a delicious and comforting meal.",
            vegan: false,
            kosher: false,
            gluten_free: true,
            cuisineId: mexicanCuisine[0]._id,
        },
        {
            title: "General Tso's Chicken",
            description: "Crispy chicken, tossed in a sweet and spicy sauce, garnished with green onions and served with rice.",
            vegan: false,
            kosher: false,
            gluten_free: false,
            cuisineId: chineseCuisine[0]._id,
        },
        {
            title: "Beef and Broccoli",
            description: "Tender beef stir-fried with fresh broccoli in a savory garlic sauce, served over steamed rice.",
            vegan: false,
            kosher: false,
            gluten_free: true,
            cuisineId: chineseCuisine[0]._id,
        },

    ]
    await Recipe.insertMany(recipes)
    console.log('created recipes with cuisines!')
}

const run = async () => {
    await main()
    db.close()
}

run()