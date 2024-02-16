const db = require('../db')
const { Recipe,Direction } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const List_of_recipies = await Recipe.find({})

    const directions = [
        {
            step_no: 1,
            instruction: "Do this",
            recipe_id:List_of_recipies[0]._id
        },
        {
            step_no: 1,
            instruction: "Do this",
            recipe_id:List_of_recipies[1]._id
        },
        {
            step_no: 2,
            instruction: "Do this",
            recipe_id:List_of_recipies[1]._id
        },
        {
            step_no: 1,
            instruction: "Do this",
            recipe_id:List_of_recipies[2]._id
        },
        {
            step_no: 2,
            instruction: "Do this",
            recipe_id:List_of_recipies[2]._id
        },
        {
            step_no: 3,
            instruction: "Do this",
            recipe_id:List_of_recipies[2]._id
        },
        {
            step_no: 1,
            instruction: "Do this",
            recipe_id:List_of_recipies[3]._id
        },
        {
            step_no: 2,
            instruction: "Do this",
            recipe_id:List_of_recipies[3]._id
        },
        {
            step_no: 3,
            instruction: "Do this",
            recipe_id:List_of_recipies[3]._id
        }
    ]
    
    await Direction.insertMany(directions)
    console.log("Created some Incrediants")
}
    
const run = async () => {
    await main()
    db.close()
}
    
run()
