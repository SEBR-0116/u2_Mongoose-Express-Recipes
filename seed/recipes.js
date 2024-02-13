const db = require('../db')
const { CousinType,Recipe,Ingredient } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const chinees_Non_Veg = await CousinType.find({category: "Non-Vegitarian"})
    const chinees_Veg = await CousinType.find({category: "Vegitarian"})
    const chinees_Vegan = await CousinType.find({category: "Vegan"})
    const Ingrediants = await Ingredient.find({})
    console.log("========")
    console.log(Ingrediants)
    // console.log(chinees_Non_Veg)
    // console.log(chinees_Veg[0]._id)
    // console.log(chinees_Vegan[0]._id)

    const recipies = [
        {
        name: "Chicken Fride Rice",
        cousin_id:chinees_Non_Veg[0]._id,
        description: "Delicious Chicken Fride Rice",
        type: "Mid Spicy",
        time_recipe: {
            prep_time: 2.2,
            cook_time: 20
        },
        servings:  2,
        images_recipe: {
        image_1: "",
        image_2: ""
        },
        nutrition:{
            serving_size:"1 plate",
            calories:250,
            total_fat:50,
            cholestrol:5,
            Carbohydrate:15
        },
        concerns:{
            vegan: false,
            gluten_free: false,
            kosher: true,
            halal: true
        },
        ingredients:[Ingrediants[0]._id,Ingrediants[2]._id,Ingrediants[3]._id],
        directions:[{
            instruction:"Step 1"
        }]
        },     
        {
            name: "Shrimp Fride Rice",
            cousin_id:chinees_Non_Veg[0]._id,
            description: "Delicious Shrimp Fride Rice",
            type: "Mid Spicy",
            time_recipe: {
                prep_time: 25,
                cook_time: 30
            },
            servings:  2,
            images_recipe: {
            image_1: "",
            image_2: ""
            },
            nutrition:{
                serving_size:"1 plate",
                calories:250,
                total_fat:50,
                cholestrol:5,
                Carbohydrate:15
            },
            concerns:{
                vegan: false,
                gluten_free: true,
                kosher: false,
                halal: true
            },
            ingredients:[Ingrediants[0]._id,Ingrediants[2]._id,Ingrediants[3]._id],
            directions:[{
                instruction:"Step 1"
            },{
                instruction:"Step 2"
            }]
        },
        {
            name: "Prok Fride Rice",
            cousin_id:chinees_Non_Veg[0]._id,
            description: "Delicious Pork Fride Rice",
            type: "Mid Spicy",
            time_recipe: {
                prep_time: 25,
                cook_time: 30
            },
            servings:  2,
            images_recipe: {
            image_1: "",
            image_2: ""
            },
            nutrition:{
                serving_size:"1 plate",
                calories:250,
                total_fat:50,
                cholestrol:5,
                Carbohydrate:15
            },
            concerns:{
                vegan: false,
                gluten_free: false,
                kosher: false,
                halal: true
            },
            ingredients:[Ingrediants[0]._id,Ingrediants[2]._id,Ingrediants[3]._id],
            directions:[{
                instruction:"Step 1"
            },{
                instruction:"Step 2"
            }]
        },
        {
            name: "Vegitable Fride Rice",
            cousin_id:chinees_Veg[0]._id,
            description: "Delicious Vegitable Fride Rice",
            type: "Mid Spicy",
            time_recipe: {
                prep_time: 25,
                cook_time: 30
            },
            servings:  2,
            images_recipe: {
            image_1: "",
            image_2: ""
            },
            nutrition:{
                serving_size:"1 plate",
                calories:250,
                total_fat:50,
                cholestrol:5,
                Carbohydrate:15
            },
            concerns:{
                vegan: true,
                gluten_free: false,
                kosher: true,
                halal: true
            },
            ingredients:[Ingrediants[5]._id,Ingrediants[2]._id,Ingrediants[3]._id],
            directions:[{
                instruction:"Step 1"
            },{
                instruction:"Step 2"
            },{
                instruction:"Step 2"
            }]
        },
        {
            name: "Mushroom Fride Rice",
            cousin_id:chinees_Veg[0]._id,
            description: "Delicious Mushroom Fride Rice",
            type: "Mid Spicy",
            time_recipe: {
                prep_time: 25,
                cook_time: 30
            },
            servings:  2,
            images_recipe: {
            image_1: "",
            image_2: ""
            },
            nutrition:{
                serving_size:"1 plate",
                calories:250,
                total_fat:50,
                cholestrol:5,
                Carbohydrate:15
            },
            concerns:{
                vegan: true,
                gluten_free: true,
                kosher: true,
                halal: true
            },
            ingredients:[Ingrediants[5]._id,Ingrediants[2]._id,Ingrediants[3]._id],
            directions:[{
                instruction:"Step 1"
            },{
                instruction:"Step 2"
            },{
                instruction:"Step 2"
            }]
        },
        {
            name: "Soyachunk Fride Rice",
            cousin_id:chinees_Veg[1]._id,
            description: "Delicious Soyachunk Fride Rice",
            type: "Mid Spicy",
            time_recipe: {
                prep_time: 25,
                cook_time: 30
            },
            servings:  2,
            images_recipe: {
            image_1: "",
            image_2: ""
            },
            nutrition:{
                serving_size:"1 plate",
                calories:250,
                total_fat:50,
                cholestrol:5,
                Carbohydrate:15
            },
            concerns:{
                vegan: true,
                gluten_free: false,
                kosher: true,
                halal: true
            },
            ingredients:[Ingrediants[5]._id,Ingrediants[2]._id,Ingrediants[3]._id],
            directions:[{
                instruction:"Step 1"
            },{
                instruction:"Step 2"
            },{
                instruction:"Step 2"
            }]
        },
        {
            name: "Vegan Fride Rice",
            cousin_id:chinees_Vegan[1]._id,
            description: "Delicious Vegan Fride Rice",
            type: "Mid Spicy",
            time_recipe: {
                prep_time: 25,
                cook_time: 30
            },
            servings:  2,
            images_recipe: {
            image_1: "",
            image_2: ""
            },
            nutrition:{
                serving_size:"1 plate",
                calories:250,
                total_fat:50,
                cholestrol:5,
                Carbohydrate:15
            },
            concerns:{
                vegan: true,
                gluten_free: true,
                kosher: true,
                halal: true
            },
            ingredients:[Ingrediants[5]._id,Ingrediants[2]._id,Ingrediants[3]._id],
            directions:[{
                instruction:"Step 1"
            },{
                instruction:"Step 2"
            },{
                instruction:"Step 2"
            }]
        }
    ]

await Recipe.insertMany(recipies)
console.log("Created some Recipe")
}

const run = async () => {
await main()
db.close()
}

run()