const db = require('../db')
const Direction = require('../models/direction')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const spaghettiAndMeatballs= await Recipe.find({name: 'Spaghetti and Meatballs'})
    const margheritaPizza= await Recipe.find({name: 'Margherita Pizza'})
    const chickenEnchiladas= await Recipe.find({name: 'Chicken Enchiladas'})
    const chickenTamales= await Recipe.find({name: 'Chicken Tamales'})
    const generalTsoChicken= await Recipe.find({name: "General Tso's Chicken"})
    const beefAndBroccoli= await Recipe.find({name: 'Beef and Broccoli'})
    
    const directions = [
        {
            steps: [
                "Cook spaghetti in boiling salted water until al dente. Drain and set aside.",
                "Prepare meatballs by mixing ground beef, breadcrumbs, Parmesan cheese, garlic, parsley, egg, salt, and pepper.",
                "Form mixture into small balls and brown in olive oil over medium heat until cooked through.",
                "Heat marinara sauce in the skillet and simmer cooked meatballs in the sauce for 5 minutes.",
                "Serve spaghetti topped with meatballs and marinara sauce. Garnish with Parmesan cheese and parsley."
            ],
            recipeId: spaghettiAndMeatballs._id,
        },
        {
            steps: [
                "Cook spaghetti in boiling salted water until al dente. Drain and set aside.",
                "Prepare meatballs by mixing ground beef, breadcrumbs, Parmesan cheese, garlic, parsley, egg, salt, and pepper.",
                "Form mixture into small balls and brown in olive oil over medium heat until cooked through.",
                "Heat marinara sauce in the skillet and simmer cooked meatballs in the sauce for 5 minutes.",
                "Serve spaghetti topped with meatballs and marinara sauce. Garnish with Parmesan cheese and parsley."
            ],
            recipeId: margheritaPizza._id,
        },
    ]
    await Direction.insertMany(directions)
    console.log('created directions with recipes!')
}

const run = async () => {
    await main()
    db.close
}

run()