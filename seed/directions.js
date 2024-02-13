const db = require('../db')
const Direction = require('../models/direction')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const SpaghettiCarbonara='65ca759bd33837be9f8b6c1a'
    const ChickenAlfredo='65ca759bd33837be9f8b6c1b'
    const VegetableLasagna='65ca759bd33837be9f8b6c1c'

    const directions = [
        {
            description: "Classic Roman pasta dish with a creamy egg sauce, pancetta, and cheese.",
            measurements: "400g spaghetti, 150g pancetta, 4 large eggs, 100g Pecorino Romano cheese, salt, pepper.",
            steps: "1. Prepare Ingredients. 2. Cook Pasta. 3. Cook Pancetta. 4. Combine Eggs and Cheese. 5. Mix Pasta with Pancetta. 6. Make Carbonara Sauce. 7. Serve.",
            recipeId: SpaghettiCarbonara
        },
        {
            description: "Creamy Parmesan cheese sauce over fettuccine pasta, topped with grilled chicken.",
            measurements: "400g fettuccine pasta, 2 chicken breasts, 2 tbsp olive oil, 2 cups heavy cream, 1 cup Parmesan cheese, 2 cloves garlic.",
            steps: "1. Prepare Chicken. 2. Cook Pasta. 3. Make Alfredo Sauce. 4. Combine. 5. Serve.",
            recipeId: ChickenAlfredo
        },
        {
            description: "Layered lasagna with vegetables and cheeses in tomato sauce.",
            measurements: "9 lasagna noodles, 2 cups spinach, 1 zucchini, 1 cup mushrooms, 1 bell pepper, 3 cups mozzarella cheese, 2 cups ricotta cheese, 1 egg, 2 cups marinara sauce, 1 cup Parmesan cheese, salt, pepper.",
            steps: "1. Prep Vegetables. 2. Prepare Cheese Mixture. 3. Cook Lasagna Noodles. 4. Assemble Lasagna. 5. Bake. 6. Serve.",
            recipeId: VegetableLasagna
        },
    ];

    // Insert directions into the database
    try {
        await Direction.insertMany(directions)
        console.log("Created directions!")
    } catch (error) {
        console.error(error)
    }
}

const run = async () => {
    await main()
    db.close()
}

run()