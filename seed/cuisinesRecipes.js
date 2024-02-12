const db = require('../db')
const {Cuisine, Recipe, Ingredient} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {
    const romaine = await Ingredient.find({ingredient: 'romaine lettuce'})
    const cucumber = await Ingredient.find({ingredient: 'cucumber'})
    const tomato = await Ingredient.find({ingredient: 'tomato'})
    const olive = await Ingredient.find({ingredient: 'olive'})
    const bellPepper = await Ingredient.find({ingredient: 'bell pepper'})
    const onion = await Ingredient.find({ingredient: 'onion'})
    const feta = await Ingredient.find({ingredient: 'feta'})
    const oliveOil = await Ingredient.find({ingredient: 'olive oil'})
    const lemon = await Ingredient.find({ingredient: 'lemon'})
    const oregano = await Ingredient.find({ingredient: 'oregano'})
    const blackPepper = await Ingredient.find({ingredient: 'black pepper'})

    const createCuisine = (cuisine) => {
        return Cuisine.create(cuisine)
    }

    const createRecipe = (recipe) => {
        return Recipe.create(recipe)
    }

    const addRecipetoCuisine = (cuisineId, recipe) => {
        return Cuisine.findByIdAndUpdate(
            cuisineId,
            {$push: {recipes: recipe._id}},
            {new: true, useFindandModify: false}
        )
    }

    const addCuisinetoRecipe = (recipeId, cuisine) => {
        return Recipe.findByIdAndUpdate(
            recipeId,
            {cuisine: cuisine._id},
            {new: true, useFindandModify: false}
        )
    }

    const greek = await createCuisine ({
        cuisine: 'Greek',
        description: 'In common with many other cuisines of the Mediterranean, Greek cuisine is founded on the triad of wheat, olive oil, and wine. It uses vegetables, olive oil, grains, fish, and meat, including pork, poultry, veal and beef, lamb, rabbit, and goat. Other important ingredients include pasta (for example hilopites), cheeses, lemon juice, herbs, olives, and yogurt. Bread made of wheat is ubiquitous; other grains, notably barley, are also used, especially for paximathia. Common dessert ingredients include nuts, honey, fruits, sesame, and filo pastries. It continues traditions from Ancient Greek and Byzantine cuisine, while incorporating Turkish, Balkan, and Italian influences.',
        regional_varieties: ['Aegean islands', 'Argolis', 'Patras', 'Arcadian', 'Maniot', 'Ionian islands', 'Ipirotiki', 'Kritiki', 'Kypriaki', 'Makedoniki', 'Mikrasiatiki', 'Pontiaki', 'Thrakiotiki']
    })

    const salad = await createRecipe ({
        dish: 'Greek Salad',
        restrictions: {
            gluten_free: true,
            dairy_free: true,
            vegetarian: true,
            vegan: false
        },
        course: 'Entree',
        description: 'Greek salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese (usually served as a slice on top of the other ingredients), and olives (typically Kalamata olives) and dressed with salt, Greek oregano, lemon juice and olive oil. Common additions include green bell pepper slices or caper berries (especially on the Dodecanese islands). Greek salad is often imagined as a farmer\'s breakfast or lunch, as its ingredients resemble those that a Greek farmer might have on hand.',
        picture: 'https://www.allrecipes.com/thmb/_BGtsCGmM8Gk_mwu8yGMEFWI0JU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/14373-GreekSaladi-mfs-4X3-0354-e8388819cafa4bae843ea433258aa03d.jpg',
        time_mins: {
            total: 20,
            prep: 20
        },
        servings: 6,
        nutrition: {
            calories: 265,
            fat_g: 22,
            carbs_g: 14,
            protein_g: 6
        },
        ingredients: [{
            ingredient: romaine[0]._id,
            quantity: 1,
            unit: 'head',
            notes: 'rinsed, dried and chopped'
        },
        {
            ingredient: cucumber[0]._id,
            quantity: 1,
            notes: 'sliced'
        },
        {
            ingredient: tomato[0]._id,
            quantity: 2,
            notes: 'large'
        },
        {
            ingredient: olive[0]._id,
            quantity: 6,
            unit: 'oz',
            notes: 'pitted black'
        },
        {
            ingredient: bellPepper[0]._id,
            quantity: 2,
            notes: '1 red, 1 green'

        },
        {
            ingredient: onion[0]._id,
            quantity: 1,
            notes: 'red, thinly sliced'
        },
        {
            ingredient: feta[0]._id,
            quantity: 1,
            unit: 'cup',
            notes: 'crumbled'
        },
        {
            ingredient: oliveOil[0]._id,
            quantity: 6,
            unit: 'tsps'
        },
        {
            ingredient: lemon[0]._id,
            quantity: 1,
            notes: 'juiced'
        },
        {
            ingredient: oregano[0]._id,
            quantity: 1,
            unit: 'tsp'
        },
        {
            ingredient: blackPepper[0]._id
        }],
        directions: ['Combine romaine, cucumber, tomatoes, olives, bell peppers, and red onion in a large bowl; sprinkle with feta cheese.', 'Whisk olive oil, lemon juice, oregano, and black pepper together in a small bowl. Pour dressing over salad, toss well to combine, and serve.', 'Pour dressing over salad, toss well to combine, and serve.']
    })

    let cuisine = await addRecipetoCuisine(greek._id, salad)

    let recipe = await addCuisinetoRecipe(salad._id, greek)
}

const run = async() => {
    await main()
    db.close()
}

run()