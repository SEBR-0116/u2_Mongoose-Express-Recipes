const Review=require('../models/review')
const Recipe=require('../models/recipe')
const Ingredient=require('../models/ingredient')
const User=require('../models/user')

const getAllReviews= async (req, res)=>{
    const reviews=await Review.find()
    res.send(reviews)
    console.log(reviews)
}

const getReview= async (req, res)=>{
    const {id}= req.params
    const review= await Review.find()
    if (review[id]){
        res.send(review[id])
    }
    else res.send('No review with that index found')
}

const createReview = async (req,res) =>{
    const {recipe, user, rating, comment} = req.body

    if (recipe && user && rating && comment){
        const newReview={
            recipe,
            user,
            rating,
            comment
        }
        Review.create(newReview)
        res.json(newReview)
    }
    else res.json('Need all the required information')
}

const deleteReview = async(req, res)=>{
    const {id}= req.params
    Review.findByIdAndDelete(id).then((deletedReview)=>{
        if(!deletedReview){
            res.send('No review could be found')
        }
        else res.send('Review Deleted')
    })

}

const getAllUsers= async (req, res)=>{
    const users=await User.find()
    res.send(users)
    console.log(users)
}

const getUser= async (req, res)=>{
    const {id}= req.params
    const user= await User.find()
    if (user[id]){
        res.send(user[id])
    }
    else res.send('No review with that index found')
}

const createUser = async (req,res) =>{
    const {userName, email, password} = req.body

    if(userName && email && password){
        const newUser={
            userName,
            email,
            password,
            savedRecipes: []
        }
        User.create(newUser)
        res.json(newUser)
    }
    else res.json('Need all the required information')

}

const deleteUser = async(req, res)=>{
    const {id}= req.params
    User.findByIdAndDelete(id).then((deletedUser)=>{
        if(!deletedUser){
            res.send('No User could be found')
        }
        else res.send('User Deleted')
    })

}







const getAllRecipes= async (req, res)=>{
    const recipes=await Recipe.find()
    res.send(recipes)
    console.log(recipes)
}

const getRecipe= async (req, res)=>{
    const {id}= req.params
    const recipe= await Recipe.find()
    if (recipe[id]){
        res.send(recipe[id])
    }
    else res.send('No recipe with that index found')
}

const createRecipe = async (req,res) =>{
    const {title, description, cookTime, ingredients, instructions, servings, healthy} = req.body

    if (title && description && cookTime && ingredients && instructions && servings){
        const newRecipe={
            title,
            description,
            cookTime,
            ingredients,
            instructions,
            servings,
            healthy
        }
        Recipe.create(newRecipe)
        res.json(newRecipe)
    }
    else res.json('Need all the required information')
}

const deleteRecipe = async(req, res)=>{
    const {id}= req.params
    Recipe.findByIdAndDelete(id).then((deletedRecipe)=>{
        if(!deletedRecipe){
            res.send('No recipe could be found')
        }
        else res.send('recipe Deleted')
    })

}







const getAllIngredients= async (req, res)=>{
    const ingredients=await Ingredient.find()
    res.send(ingredients)
    console.log(ingredients)
}

const getIngredient= async (req, res)=>{
    const {id}= req.params
    const ingredient= await Ingredient.find()
    if (ingredient[id]){
        res.send(ingredient[id])
    }
    else res.send('No ingredient with that index found')
}

const createIngredient = async (req,res) =>{
    const {name, category} = req.body

    if (name && category){
        const newIngredient={
            name,
            category
        }
        Ingredient.create(newIngredient)
        res.json(newIngredient)
    }
    else res.json('Need all the required information')
}

const deleteIngredient = async(req, res)=>{
    const {id}= req.params
    Ingredient.findByIdAndDelete(id).then((deletedIngredient)=>{
        if(!deletedIngredient){
            res.send('No Ingredient could be found')
        }
        else res.send('Ingredient Deleted')
    })

}

module.exports={
    getAllReviews,
    getReview,
    createReview,
    deleteReview,
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    getAllRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    getAllIngredients,
    createIngredient,
    getIngredient,
    deleteIngredient
}
