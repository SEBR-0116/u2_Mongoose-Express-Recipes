const {Recipe, Cuisine, Ingredient} = require('../models')

const getAllRecipes = async(req, res) => {
    try {
        const recipes = await Recipe.find({}).populate({path: 'cuisine', select: 'cuisine'}).populate({path: 'ingredients.ingredient', select: 'ingredient_name'})
        res.json(recipes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipeById = async(req, res) => {
    try {
        const {id} = req.params
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json(recipe)
        }
        return res.status(404).send('Recipe does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipeByDish = async(req, res) => {
    try {
        const {dish} = req.params
        const regex = new RegExp(dish, 'i')
        const dishes = await Recipe.find({dish: {$regex: regex}}).populate({path: 'cuisine', select: 'cuisine'}).populate({path: 'ingredients.ingredient', select: 'ingredient_name'})
        if (dishes) {
            return res.json(dishes)
        }
        return res.status(404).send('Recipe does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipeByRestriction = async(req, res) => {
    try {
        let {restriction} = req.query
        let recipes
        if (restriction === 'gluten') {
            recipes = await Recipe.find({'restrictions.gluten_free': true}).populate({path: 'cuisine', select: 'cuisine'}).populate({path: 'ingredients.ingredient', select: 'ingredient_name'})
        } else if (restriction === 'dairy') {
            recipes = await Recipe.find({'restrictions.dairy_free': true}).populate({path: 'cuisine', select: 'cuisine'}).populate({path: 'ingredients.ingredient', select: 'ingredient_name'})
        } else if (restriction === 'vegetarian') {
            recipes = await Recipe.find({'restrictions.vegetarian': true}).populate({path: 'cuisine', select: 'cuisine'}).populate({path: 'ingredients.ingredient', select: 'ingredient_name'})
        } else if (restriction === 'vegan') {
            recipes = await Recipe.find({'restrictions.vegan': true}).populate({path: 'cuisine', select: 'cuisine'}).populate({path: 'ingredients.ingredient', select: 'ingredient_name'})
        }

        if (recipes) {
            return res.json(recipes)
        }
        return res.status(404).send('Recipe does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipeByCourse = async(req, res) => {
    try {
        const {course} = req.params
        const regex = new RegExp(course, 'i')
        const recipes = await Recipe.find({course: {$regex: regex}}).populate({path: 'cuisine', select: 'cuisine'}).populate({path: 'ingredients.ingredient', select: 'ingredient_name'})
        if (recipes) {
            return res.json(recipes)
        }
        return res.status(404).send('Recipe does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRecipeByIngredients = async(req, res) => {
    try {
        const {ingredient} = req.params
        const regex = new RegExp(ingredient, 'i')
        const ingredientId = await Ingredient.find({ingredient_name: {$regex: regex}})

        const key = 'ingredient'
        const query = {
            ingredients: {
                $elemMatch: {
                    [key]: ingredientId
                }
            }
        }
        
        const recipes = await Recipe.find(query).populate({path: 'cuisine', select: 'cuisine'}).populate({path: 'ingredients.ingredient', select: 'ingredient_name'})
        if (recipes) {
            return res.json(recipes)
        }
        return res.status(404).send('Recipe does not exist')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createRecipe = async(req, res) => {
    try {
        let allIngredients = []
        for (let i=0; i<req.body.ingredients.length; i++) {
            const ingredient = await Ingredient.find({ingredient: req.body.ingredients[i].ingredient_name})
            allIngredients = [...allIngredients, {ingredient: ingredient[0]._id, quantity: req.body.ingredients[i].quantity, unit: req.body.ingredients[i].unit, notes: req.body.ingredients[i].notes}]
        }
        const cuisine = await Cuisine.find({cuisine: req.body.cuisine})
        const recipe = await new Recipe({
            dish: req.body.dish,
            restrictions: req.body.restrictions,
            cuisine: cuisine[0]._id,
            course: req.body.course,
            description: req.body.description,
            picture: req.body.picture,
            time_mins: req.body.time_mins,
            servings: req.body.servings,
            nutrition: req.body.nutrition,
            ingredients: allIngredients,
            directions: req.body.directions
        })
        const updateCuisine = await Cuisine.findByIdAndUpdate(cuisine[0]._id, {$push: {recipes: recipe._id}}, {new: true})
        await recipe.save()
        return res.status(201).json({
            recipe
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateRecipe = async(req, res) => {
    try {
        const {id} = req.params
        let allIngredients
        if (req.body.ingredients) {
            for (let i=0; i<req.body.ingredients.length; i++) {
                const ingredient = await Ingredient.find({ingredient: req.body.ingredients[i].ingredient_name})
                allIngredients = [...allIngredients, {ingredient: ingredient[0]._id, quantity: req.body.ingredients[i].quantity, unit: req.body.ingredients[i].unit, notes: req.body.ingredients[i].notes}]
            }
        }
        let cuisine
        if(req.body.cuisine) {
            const oldRecipe = await Recipe.findById(id)
            const oldCuisine = await Cuisine.findByIdAndUpdate(oldRecipe.cuisine._id, {$pull: {recipes: id}}, {new: true})
            const newCuisine = await Cuisine.find({cuisine: req.body.cuisine})
            cuisine = newCuisine[0]._id
        }
        const recipe = await Recipe.findByIdAndUpdate(id, {
            dish: req.body.dish,
            restrictions: req.body.restrictions,
            cuisine: cuisine,
            course: req.body.course,
            description: req.body.description,
            picture: req.body.picture,
            time_mins: req.body.time_mins,
            servings: req.body.servings,
            nutrition: req.body.nutrition,
            ingredients: allIngredients,
            directions: req.body.directions
        }, {new: true})
        if (req.body.cuisine) {
            const updateCuisine = await Cuisine.findByIdAndUpdate(cuisine, {$push: {recipes: recipe._id}}, {new: true})
        }
        if (recipe) {
            return res.status(200).json(recipe)
        }
        throw new Error('Recipe not found')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const deleteRecipe = async(req, res) => {
    try {
        const {id} = req.params
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Recipe deleted')
        }
        throw new Error('Recipe not found')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    getRecipeByDish,
    getRecipeByCourse,
    getRecipeByIngredients,
    getRecipeByRestriction,
    createRecipe,
    updateRecipe,
    deleteRecipe
}