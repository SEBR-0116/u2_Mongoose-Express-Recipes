const db = require('../db')
const { Recipe, Direction } = require('../models');

db.on('error', console.error.bind (console, 'MondoDB connection error:'))

const main = async () => {
    const direction = [

            { steps: 'Step 1:, brown ground turkey and drain the oils, Step 2:, add Tacos seasoning packet with 1 cup of water, mix together, Step 3:, place lid on top to simmer until flavors combine, 3 to 4 mintues. transfer to a serving bowl. Step 4: Heat skillet with oil, place a taco corn tortilla in oil, flip on both side and fold in half. Cook on both side until lightly brown, creating a taco shell. Step 5: add taco meat, cheese, lettuces, onions and cilantro into the taco shell'},
            { nutritionFacts: 'Calories: 201, Fat: 10g , Carbs: 16g, Protein: 21g'},
            { familyRatings: 10,},
            { recipeId: '65ca7ea210751f367f1d2de4'}
        
        
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