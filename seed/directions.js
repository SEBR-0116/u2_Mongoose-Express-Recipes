const db = require('../db')
const { Recipe, Direction } = require('../models');

db.on('error', console.error.bind (console, 'MondoDB connection error:'))

const main = async () => {
    const directions = [

            { 
            steps: 'Step 1:, brown ground turkey and drain the oils, Step 2:, add Tacos seasoning packet with 1 cup of water, mix together, Step 3:, place lid on top to simmer until flavors combine, 3 to 4 mintues. transfer to a serving bowl. Step 4: Heat skillet with oil, place a taco corn tortilla in oil, flip on both side and fold in half. Cook on both side until lightly brown, creating a taco shell. Step 5: add taco meat, cheese, lettuces, onions and cilantro into the taco shell',
            nutritionFacts: 'Calories: 201, Fat: 10g , Carbs: 16g, Protein: 21g',
            familyRatings: 10,
            recipeId: '65cac33fd5268a65a87c4deb'
        },
        { 
            steps: 'Step 1:, Place chicken, tomatoes with habanero peppers, green bell pepper, onion, jalapeno chile peppers, and 2 packet taco seasoning in a large pot; pour in enough water to just cover chicken. Step 2:, Bring chicken and vegetables to a boil, reduce heat to low, and simmer until chicken is no longer pink inside Step 3:, Remove chicken from the pot and let cool. Pull chicken meat off the bones and cut into bite-sized pieces; discard carcass. Pour off about half the liquid from the pot, making sure all the vegetables stay. Simmer until flavors have blended, about 10 minutes. Step 4: Heat skillet with oil, place a taco corn tortilla in oil, flip on both side and fold in half. Cook on both side until lightly brown, creating a taco shell. Step 5: Heat canola oil in a large skillet over medium heat; fry tortillas, working in batches, in the hot oil until desired crispness is reached, 1 to 2 minutes per side. Spoon chicken mixture into each tortilla to serve.',
            nutritionFacts: 'Calories: 219, Fat: 10g , Carbs: 21g, Protein: 11g',
            familyRatings: 10,
            recipeId: '65cac33fd5268a65a87c4dec'
        },
        { 
            steps: 'Step 1:, Combine water, sofrito base, and cayenne pepper in a large skillet for the slaw. Bring to a boil over medium heat. Add shrimp to the boiling liquid, bring back to a boil, and cook until shrimp turn white and peachy-pink, and make a “C” shape, 3 to 5 minutes. Using a slotted spoon or spider, remove shrimp from the cooking liquid immediately. Step 2:, add Tacos seasoning packet with 1 cup of water, mix together, Step 3:, Set an oven rack about 6 inches from the heat source and preheat the broiler. Line a baking tray with aluminum foil. Step 4: Heat skillet with oil, place a taco corn tortilla in oil, flip on both side and fold in half. Cook on both side until lightly brown, creating a taco shell. Step 5:, Stir refried beans, smoked paprika, 1/2 teaspoon cumin, and garlic granules together in a bowl for the tostadas. Spread each tostada shell with bean mixture, 1 to 2 tablespoons per tostada, or to taste. Place tostadas on the prepared baking tray in a single layer. Step 6:, Broil under the preheated broiler until cheese begins to melt, 1 to 2 minutes. Step 7:, Top more cheese, lettuces, onions and cilantro to taste. Add three shrimp per tostada, and drizzle crema over all. Serve with lime slices.',
            nutritionFacts: 'Calories: 639, Fat: 47g , Carbs: 42g, Protein: 17g',
            familyRatings: 10,
            recipeId: '65cac33fd5268a65a87c4ded'
        }
    ]

    await Direction.insertMany(directions)
    console.log('Created directions!')
}

const run = async () => {
    try {
        await main();
    } catch (error) {
        console.error('Error running the seed script:', error);
    } finally {
        db.close();
    }
  }
  
  run()