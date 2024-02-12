const db = require('../db')
const Ingredient = require('../models/ingredient')
const Recipe = require('../models/recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const spaghettiAndMeatballs= await Recipe.find({title: 'Spaghetti and Meatballs'})
    const margheritaPizza= await Recipe.find({title: 'Margherita Pizza'})
    const chickenEnchiladas= await Recipe.find({title: 'Chicken Enchiladas'})
    const chickenTamales= await Recipe.find({title: 'Chicken Tamales'})
    const generalTsoChicken= await Recipe.find({title: "General Tso's Chicken"})
    const beefAndBroccoli= await Recipe.find({title: 'Beef and Broccoli'})

    const ingredients = [
        {
            name: "Ground Pork",
            quantity: {
              amount: 2,
              unit: "lbs"
            },
            recipeId: spaghettiAndMeatballs[0]._id,
        },
        {
            name: "Spaghetti",
            quantity: {
              amount: 1,
              unit: "lb"
            },
            recipeId: spaghettiAndMeatballs[0]._id,
        },
        {
            name: "Pizza Dough",
            quantity: {
              amount: 2,
              unit: "lbs"
            },
            recipeId: margheritaPizza[0]._id,
        },
        {
            name: "Mozzarella",
            quantity: {
              amount: 8,
              unit: "oz"
            },
            recipeId: margheritaPizza[0]._id,
        },
        {
            name: "Chicken",
            quantity: {
              amount: 1.5,
              unit: "lbs"
            },
            recipeId: chickenEnchiladas[0]._id,
        },
        {
            name: "Corn Tortillas",
            quantity: {
              amount: 8,
              unit: "tortillas"
            },
            recipeId: chickenEnchiladas[0]._id,
        },
        {
            name: "Corn Masa",
            quantity: {
              amount: 1,
              unit: "lbs"
            },
            recipeId: chickenTamales[0]._id,
        },
        {
            name: "Corn Husks",
            quantity: {
              amount: 8,
              unit: "husks"
            },
            recipeId: chickenTamales[0]._id,
        },
        {
            name: "Sweet and Spicy Sauce",
            quantity: {
              amount: 6,
              unit: "oz"
            },
            recipeId: generalTsoChicken[0]._id,
        },
        {
            name: "White Rice",
            quantity: {
              amount: 1,
              unit: "cup"
            },
            recipeId: generalTsoChicken[0]._id,
        },
        {
            name: "Skirt Steak",
            quantity: {
              amount: 1,
              unit: "lb"
            },
            recipeId: beefAndBroccoli[0]._id,
        },
        {
            name: "Broccoli",
            quantity: {
              amount: 4,
              unit: "cups"
            },
            recipeId: beefAndBroccoli[0]._id,
        },
       
    ]
    await Ingredient.insertMany(ingredients)
    console.log('created ingredients with recipes!')
}

const run = async () => {
    await main()
    db.close()
}

run()