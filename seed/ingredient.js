const mongoose = require('mongoose')
const db = require('../db')
const Ingredient = require('../models/ingredient')
const Cuisine = require('../models/cuisine');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    try {
        const cuisineId1 = '65ca530b732ab7a70ed01a07'
        const cuisineId2 = '65ca67dcfc409864ad50e055'
        const cuisineId3 = '65ca699bfc409864ad50e056'

        // Seed ingredients for Cuisine 1
        const ingredients1 = [
            { name: 'All- Purpose Flour', measurement: '1 1/2 cup', cuisine: cuisineId1 },
            { name: 'Baking Powder', measurement: '1 tbsp', cuisine: cuisineId1 },
            { name: 'Pumpkin Pie Spice', measurement: '1 tbsp', cuisine: cuisineId1 },
            { name: 'Kosher Salt', measurement: '1/2 tsp', cuisine: cuisineId1 },
            { name: '2 Large Eggs', cuisine: cuisineId1 },
            { name: 'Milk', measurement: '3/4 cup',cuisine: cuisineId1 },
            { name: 'Unsalted Butter', measurement: '1/4 cup', cuisine: cuisineId1 },
            { name: 'Maple Syrup', measurement: '1/4 cup' , cuisine: cuisineId1 },
            { name: 'Vanilla Extract', measurement: '1 tsp', cuisine: cuisineId1 },
            { name: 'Sweet Potato Puree', measurement: '1/2 cup', cuisine: cuisineId1 },
            { name: 'Oil or Butter', cuisine: cuisineId1 },
        ]

        await Ingredient.insertMany(ingredients1)

        // Seed ingredients for Cuisine 2
        const ingredients2 = [
            { name: 'Cornmeal', measurement: '1 1/2 cup', cuisine: cuisineId2 },
            { name: 'Self- Rising Flour', measurement: '1/2 cup', cuisine: cuisineId2 },
            { name: 'Baking Powder', measurement: '1 1/2 tsp', cuisine: cuisineId2 },
            { name: 'Kosher Salt', measurement: '1 1/4 tsp', cuisine: cuisineId2 },
            { name: 'Granulated Sugar', measurement: '2 1/2 tsp', cuisine: cuisineId2 },
            { name: 'Buttermilk', measurement: '1 cup', cuisine: cuisineId2 },
            { name: '1 Large Egg', cuisine: cuisineId2 },
            { name: 'Vegetable Oil', measurement: '1/2 cup', cuisine: cuisineId2 },
        ]

        await Ingredient.insertMany(ingredients2)

        // Seed ingredients for Cuisine 3
        const ingredients3 = [
            { name: '5 Slices Bacon', cuisine: cuisineId3 },
            { name: 'Ground Black Pepper', measurement: '1/2 tsp', cuisine: cuisineId3 },
            { name: 'Onion', measurement: '1/2 cup', cuisine: cuisineId3 },
            { name: '3 Cloves Garlic', cuisine: cuisineId3 },
            { name: 'Shredded Hashbrown Potatoes', measurement: '30 oz', cuisine: cuisineId3 },
            { name: '1 Can Condensed Cream of Chicken Soup', measurement: '10.5 oz', cuisine: cuisineId3 },
            { name: 'Sour Cream', measurement: '1 cup', cuisine: cuisineId3 },
            { name: 'Unsalted Butter', measurement: '4 tsp', cuisine: cuisineId3 },
            { name: 'Cheddar Cheese', measurement: '2 cups', cuisine: cuisineId3 },
            { name: 'Kosher Salt', measurement: '1 tsp', cuisine: cuisineId3 },
            { name: '2 Green Onions', cuisine: cuisineId3 },
        ]

        await Ingredient.insertMany(ingredients3)

        console.log('Ingredients seeded successfully')
    } catch (error) {
        console.error('Error seeding ingredients:', error)
    } finally {
        mongoose.connection.close();
    }
}

main()
