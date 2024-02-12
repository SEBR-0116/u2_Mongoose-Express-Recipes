const db = require('../db')
const Ingredient = require('../models/ingredients')
const Recipe = require('../models/recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const spaghettiAndMeatballs= await Recipe.find({name: 'Spaghetti and Meatballs'})
    const margheritaPizza= await Recipe.find({name: 'Margherita Pizza'})
    const chickenEnchiladas= await Recipe.find({name: 'Chicken Enchiladas'})
    const chickenTamales= await Recipe.find({name: 'Chicken Tamales'})
    const generalTsoChicken= await Recipe.find({name: "General Tso's Chicken"})
    const beefAndBroccoli= await Recipe.find({name: 'Beef and Broccoli'})

    const ingredients = [
        {
            name: "Ground Pork",
            quantity: {
              amount: 2,
              unit: "lbs"
            },
            recipeId: spaghettiAndMeatballs._id,
        },
        {
            name: "Spaghetti",
            quantity: {
              amount: 1,
              unit: "lb"
            },
            recipeId: spaghettiAndMeatballs._id,
        },
        {
            name: "Pizza Dough",
            quantity: {
              amount: 2,
              unit: "lbs"
            },
            recipeId: margheritaPizza._id,
        },
        {
            name: "Mozzarella",
            quantity: {
              amount: 8,
              unit: "oz"
            },
            recipeId: margheritaPizza._id,
        },
        {
            name: "Chicken",
            quantity: {
              amount: 1.5,
              unit: "lbs"
            },
            recipeId: chickenEnchiladas._id,
        },
        {
            name: "Corn Tortillas",
            quantity: {
              amount: 8,
              unit: "tortillas"
            },
            recipeId: chickenEnchiladas._id,
        },
        {
            name: "Corn Masa",
            quantity: {
              amount: 1,
              unit: "lbs"
            },
            recipeId: chickenTamales._id,
        },
        {
            name: "Corn Husks",
            quantity: {
              amount: 8,
              unit: "husks"
            },
            recipeId: chickenTamales._id,
        },
        {
            name: "Sweet and Spicy Sauce",
            quantity: {
              amount: 6,
              unit: "oz"
            },
            recipeId: generalTsoChicken._id,
        },
        {
            name: "White Rice",
            quantity: {
              amount: 1,
              unit: "cup"
            },
            recipeId: generalTsoChicken._id,
        },
        {
            name: "Skirt Steak",
            quantity: {
              amount: 1,
              unit: "lb"
            },
            recipeId: beefAndBroccoli._id,
        },
        {
            name: "Broccoli",
            quantity: {
              amount: 4,
              unit: "cups"
            },
            recipeId: beefAndBroccoli._id,
        },
       
    ]
    await Ingredient.insertMany(ingredients)
    console.log('created ingredients with recipes!')
}

const run = async () => {
    await main()
    db.close
}

run()