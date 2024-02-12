const db = require('../db')
const { Ingredient } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const ingredients = [
        // VENEZUELAN: AREPAS
        {
            name: "Pre-cooked cornmeal (Harina P.A.N.)",
            is_vegan: true,
            is_kosher: true,
            is_keto: false,
            quantity_in_oz: 8, 
            is_optional: false
        },
        {
            name: "Water",
            is_vegan: true,
            is_kosher: true,
            is_keto: true,
            quantity_in_oz: 16, 
            is_optional: false
        },
        {
            name: "Salt",
            is_vegan: true,
            is_kosher: true,
            is_keto: true,
            quantity_in_oz: 1,
            is_optional: false
        },
        // VENEZUELAN PATACON
        {
            name: "Green plantains",
            is_vegan: true,
            is_kosher: true,
            is_keto: false,
            quantity: 2, // Example: 2 plantains
            is_optional: false
        },
        {
            name: "Vegetable oil",
            is_vegan: true,
            is_kosher: true,
            is_keto: true,
            quantity_in_oz: 16, // Example: 16 oz
            is_optional: false
        },
        {
            name: "Guacamole",
            is_vegan: true,
            is_kosher: true,
            is_keto: true,
            is_optional: true
        },

        // Italian Pizza

        {
            name: "Pizza dough",
            is_vegan: true,
            is_kosher: true,
            is_keto: false,
            quantity: 1, // Example: 1 pizza dough
            is_optional: false
        },
        {
            name: "Pizza sauce",
            is_vegan: true,
            is_kosher: true,
            is_keto: true,
            quantity_in_oz: 8, // Example: 8 oz
            is_optional: false
        },
        {
            name: "Mozzarella cheese",
            is_vegan: false,
            is_kosher: true,
            is_keto: true,
            quantity_in_oz: 8, // Example: 8 oz
            is_optional: false
        },
        {
            name: "Pepperoni",
            is_vegan: false,
            is_kosher: false,
            is_keto: true,
            quantity_in_oz: 4, // Example: 4 oz
            is_optional: true
        },
        {
            name: "Bell peppers",
            is_vegan: true,
            is_kosher: true,
            is_keto: true,
            quantity_in_oz: 4, // Example: 4 oz
            is_optional: true
        },
        {
            name: "Mushrooms",
            is_vegan: true,
            is_kosher: true,
            is_keto: true,
            quantity_in_oz: 4, // Example: 4 oz
            is_optional: true
        }
    ]

    await Ingredient.insertMany(ingredients)
    console.log("Ingredients were inserted into the database")
}

const run = async () => {
    await main()
    db.close()
}

run()