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
                "Preheat your oven to the highest temperature setting (usually around 475-500°F or 245-260°C). Place a pizza stone or baking sheet in the oven to heat.",
                "Roll out pizza dough on a floured surface to your desired thickness. Transfer the dough to a pizza peel or parchment paper.",
                "Spread tomato sauce evenly over the dough, leaving a small border around the edges. Arrange fresh mozzarella slices and whole basil leaves on top. Drizzle with olive oil and sprinkle with salt.",
                "Carefully transfer the assembled pizza to the preheated pizza stone or baking sheet in the oven. Bake for 10-12 minutes, or until the crust is golden brown and the cheese is bubbly and lightly browned.",
                "Remove the pizza from the oven and let it cool for a minute or two. Slice the pizza, garnish with additional fresh basil leaves if desired, and serve hot."
            ],
            recipeId: margheritaPizza._id,
        },
        {
            steps: [
                "Preheat your oven to 350°F (175°C). Grease a 9x13 inch baking dish.",
                "In a skillet, cook diced onions until softened. Add shredded cooked chicken, green chilies, and spices. Cook briefly.",
                "Spoon enchilada sauce onto tortillas. Add chicken mixture and cheese. Roll up and place seam side down in baking dish.",
                "Pour remaining sauce over enchiladas. Sprinkle with cheese.",
                "Bake for 20-25 minutes, until cheese is melted and bubbly. Serve garnished with cilantro."
            ],
            recipeId: chickenEnchiladas._id,
        },
        {
            steps: [
                "Soak corn husks in warm water for 30 minutes to soften. Drain and set aside.",
                "In a large bowl, mix masa harina, chicken broth, and melted lard until dough forms.",
                "Spread masa onto soaked corn husks, leaving space at the edges. Add shredded cooked chicken in the center.",
                "Fold the sides of the corn husks over the filling, then fold up the bottom. Secure with kitchen twine if needed.",
                "Steam tamales in a large pot for 1-1.5 hours, until masa is firm and pulls away from the husks."
            ],
            recipeId: chickenTamales._id,
        },
        {
            steps: [
                "In a bowl, mix together cornstarch, soy sauce, and egg until smooth. Add chicken pieces and toss to coat.",
                "Heat oil in a large skillet or wok over medium-high heat. Add coated chicken and cook until browned and cooked through.",
                "Remove chicken from skillet and set aside. In the same skillet, add minced garlic, ginger, and dried red chili peppers. Stir-fry until fragrant.",
                "Add chicken back to the skillet along with soy sauce, hoisin sauce, rice vinegar, and sugar. Cook until sauce thickens and coats the chicken.",
                "Serve General Tso's chicken hot, garnished with sliced green onions and sesame seeds, over steamed rice."
            ],
            recipeId: generalTsoChicken._id,
        },
        {
            steps: [
                "Slice beef thinly against the grain. In a bowl, marinate beef with soy sauce, cornstarch, and sesame oil. Set aside.",
                "Blanch broccoli florets in boiling water for 1-2 minutes. Drain and set aside.",
                "Heat oil in a large skillet or wok over high heat. Add minced garlic and ginger, stir-fry until fragrant.",
                "Add marinated beef to the skillet. Stir-fry until beef is browned and cooked through.",
                "Add blanched broccoli florets to the skillet. Stir in oyster sauce and cook until heated through. Serve hot."
            ],
            recipeId: beefAndBroccoli._id,
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