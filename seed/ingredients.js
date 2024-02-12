const db = require('../db')
const Ingredients = require('../models/ingredients')
const Recipes = require('../models/recipes')

db.on('error', (error) => {
  console.error('MogoDB connection error:', error);
})

const main = async () => {

  const orangeChicken = await Recipes.findone({name: 'Better Than Takeout Orange Chicken'})
  const chickenPaprikash = await Recipes.findOne({name: 'Chicken Paprikash'})
  const veganPasta = await Recipes.findOne({name: 'Vegan Cheesy Pasta Bake'})
  const bakedPotato = await Recipes.findOne({name: 'Cheddar, Broccoli, and Baked Potato Chowder'})
  const calzone = await Recipes.findOne({name: 'Italian Sausage and Ricotta Calzone'})
  const classicCuban = await Recipes.findOne({name: 'Classic Cuban Sandwiches'})

  const ingredients = [
    {
      ingredient1: '2 lbs boneless skinless chicken thighs',
      ingredient2: '1/2 cup BBQ sauce - brown sugar flavored',
      ingredient3: '1/3 cup orange juice',
      ingredient4: '2 tbsp soy sauce',
      ingredient5: '2 tsp cornstarch',
      ingredient6: '2/3 cup orange marmalade',
      ingredient7: '2 cups of Cooked rice',
      ingredient8: 'chopped green onions and sesame seeds for garnish',
      recipe_id: orangeChicken[0]._id
    },
    {
      ingredient1: '2 tbsp ghee',
      ingredient2: '1 medium onion - peeled and diced',
      ingredient3: '1 small green bell pepper - seeded and diced',
      ingredient4: '4 cloves garlic - minced',
      ingredient5: '4 skin-on chicken breast halves - 2 lbs',
      ingredient6: '1 large tomato - diced',
      ingredient7: '1/4 cup tomato sauce',
      ingredient8: '2 tbsp Hungarian paprika',
      ingredient9: '1 cup chicken broth',
      ingredient10: '1 tbsp flour',
      ingredient11: '3/4 cup sour  cream',
      ingredient12: '1/2 tsp sea salt',
      ingredient13: '1/4 tsp ground black pepper',
      recipe_id: chickenPaprikash[0]._id
    },
    {
      ingredient1: '500 g pasta gluten free',
      ingredient2: '1 L water',
      ingredient3: 'pinch of salt',
      ingredient4: '2 slices bread gluten free',
      ingredient5: '1 sprig rosemary',
      ingredient6: '1-2 sprigs thyme',
      ingredient7: 'pinch of salt',
      ingredient8: 'pinch of garlic granules',
      ingredient9: '100 g cashews',
      ingredient10: '2 garlic cloves',
      ingredient11: '2 tsp Dijon mustard',
      ingredient12: '1 tbsp olive oil',
      ingredient13: '125 ml almond milk',
      ingredient14: 'Salt & pepper',
      ingredient15: '100 g grated cheese vegan',
      recipe_id: veganPasta[0]._id
    },
    {
      ingredient1: '2 tbsp butter',
      ingredient2: '1 cup onion chopped',
      ingredient3: '3 clove garlic minced',
      ingredient4: '1 tsp salt',
      ingredient5: '1 tsp black pepper',
      ingredient6: '1/2 tsp dried thyme crushed',
      ingredient7: '2 cup broccoli chopped',
      ingredient8: '8 oz sour cream',
      ingredient9: '1 cup cheddar cheese shredded',
      ingredient10: '4 slice bacon crumbled - cooked',
      ingredient11: 'green onion sliced as needed',
      ingredient12: 'hot pepper sauce as needed',
      ingredient13: '1/2 cup cheddar cheese shredded',
      ingredient14: '2 lbs russet potato peeled',
      ingredient15: '32 oz low sodium chicken stock',
      recipe_id: bakedPotato[0]._id
    },
    {
      ingredient1: '1 pillsbury pizza dough',
      ingredient2: '1 lb ground italian sausage',
      ingredient3: '1 tbsp olive oil',
      ingredient4: '1/2 yellow onion - minced',
      ingredient5: '3 garlic cloves - minced',
      ingredient6: '2 tbsp tomato paste',
      ingredient7: '1/2 cup whole milk ricotta cheese',
      ingredient8: 'salt as needed',
      ingredient9: '2 eggs - beaten',
      ingredient10: 'grated parmesan cheese - for serving',
      recipe_id: calzone[0]._id
    },
    {
      ingredient1: '2 lbs boneless pork shoulder - trimmed and cut into 2 pieces, Boston butt',
      ingredient2: '2 tsp salt',
      ingredient3: '1 tsp pepper',
      ingredient4: '1 tbsp olive oil',
      ingredient5: '6 cloved of garlic - minced',
      ingredient6: '1/2 cup chicken broth - or beef',
      ingredient7: 'zest and juice of one large orange',
      ingredient8: '2 tbsp lime juice',
      ingredient9: '6 cuban rolls',
      ingredient10: '1 tbsp butter',
      ingredient11: '2 tbsp yellow mustard',
      ingredient12: '3 oz thinly sliced deli ham',
      ingredient13: '3 oz thinly sliced swiss cheese',
      ingredient14: '18 dill pickle slices',
      recipe_id: classicCuban[0]._id
    },
  ]

  await Ingredients.insertMany(ingredients)
  console.log('Created ingredients')
}

const run = async () => {
  await main()
    db.close()
}

run()