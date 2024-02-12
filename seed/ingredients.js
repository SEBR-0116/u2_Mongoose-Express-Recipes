const db=require("../db");
const Ingredient=require("../models/ingredient")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main= async () =>{
    const ingredients=[
        {
            name: 'banana',
            category: 'fruit'
        },
        {
            name: 'egg',
            category: 'dairy'
        },
        {
            name: 'flour',
            category: 'grain'
        },
        {
            name: 'yoghurt',
            category: 'dairy'
        },
        {
            name: 'noodles',
            category: 'grain'
        },
        {
            name: 'peas',
            category: 'vegetable'
        },

        {
            name: 'olive oil',
            category: 'oil'
        },
        {
            name: 'corn tortilla chips',
            category: 'grain'
        },
        {
            name: 'cheddar cheese',
            category: 'dairy'
        },
        {
            name: 'pickeled jalapeños',
            category: 'vegetable'
        }




    ]

    await Ingredient.insertMany(ingredients)
    console.log('Created Ingredients!')
}

const run = async () => {
    await main();
    db.close();
  };

  run();
