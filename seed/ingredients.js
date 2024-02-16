const db = require('../db')
const { Recipe,Ingredient } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const List_of_recipies = await Recipe.find({})
    // const chinees_Veg = await CousinType.find({category: "Vegitarian"})
    // const chinees_Vegan = await CousinType.find({category: "Vegan"})
    // console.log(List_of_recipies[0]._id)


    const ingrediances =[

        {
            name: "Rice",
            description: "Special Notes",
            quantity: 1,
            unit: "Kg",
            //recipe_id: List_of_recipies[0]._id
        },        
        {
            name: "Eggs",
            description: "Boiled Egg",
            quantity: 5,
            unit: "Each",
            // recipe_id: List_of_recipies[0]._id
        },
        {
            name: "Rice",
            description: "Special Notes",
            quantity: 1,
            unit: "Kg",
            // recipe_id: List_of_recipies[1]._id
        },
        {
            name: "Eggs",
            description: "Boiled Egg",
            quantity: 5,
            unit: "Each",
            // recipe_id: List_of_recipies[2]._id
        },
        {
            name: "Rice",
            description: "Special Notes",
            quantity: 1,
            unit: "Kg",
            // recipe_id: List_of_recipies[2]._id
        },
        {
            name: "Eggs",
            description: "Boiled Egg",
            quantity: 5,
            unit: "Each",
            // recipe_id: List_of_recipies[3]._id
        },
        {
            name: "Rice",
            description: "Special Notes",
            quantity: 1,
            unit: "Kg",
            //recipe_id: List_of_recipies[3]._id
        },
    ]

    await Ingredient.insertMany(ingrediances)
    console.log("Created some Incrediants")
}
    
const run = async () => {
    await main()
    db.close()
}
    
run()

