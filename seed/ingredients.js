const db = require('../db')
const Ingredient = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const ingredients = {
        lasagnaIng: [
        { name: 'ground beef', quantity: '2 pounds'},
        { name: 'onion', quantity: '1/2 cup'},
        { name: 'garlic', quantity: '2 cloves'},
        { name: 'tomato sauce', quantity: '6.5 ounces'},
        { name: 'basil', quantity: '1.5 teaspoons'},
        { name: 'italian seasoning', quantity: '1 teaspoons'},
        { name: 'black pepper', quantity: '1/4 teaspoons'},
        { name: 'salt', quantity: '1.5 teaspoons'},
        { name: 'lasagna noodles', quantity: '12 sheets'},
        { name: 'ricotta cheese', quantity: '16 ounces'},
        { name: 'egg', quantity: '1 egg'},
        { name: 'mozerella cheese', quantity: '3/4 pound' }, 
        { name: 'parmesan cheese', quantity: '3/4 cup'},
        ],
        chiliIng: [
            { name: 'ground beef', quantity: '1 pound'},
            { name: 'onion', quantity: '1 large'},
            { name: 'garlic', quantity: '2 cloves'},
            { name: 'tomato sauce', quantity: '15 ounces'},
            { name: 'kidney beans', quantity: '15 ounces'},
            { name: 'crushed tomatoes', quantity: '15 ounces'},
            { name: 'black pepper', quantity: '1/4 teaspoons'},
            { name: 'salt', quantity: '1.5 teaspoons'},
            { name: 'chili powder', quantity: '3 tablespoons'},
        ]}

    await Ingredient.insertMany(ingredients)
    console.log("Defined Ingredients")
}
const run = async () => {
    await main()
    db.close()
}

run()