const db = require('../db')
const Directions = require('../models/directions')
const Recipes = require('../models/recipes')

db.on('error', (error) => {
  console.error('MogoDB connection error:', error);
})

const main = async () => {

  const orangeChicken = await Recipes.find({name: 'Better Than Takeout Orange Chicken'})
  const chickenPaprikash = await Recipes.find({name: 'Chicken Paprikash'})
  const veganPasta = await Recipes.find({name: 'Vegan Cheesy Pasta Bake'})
  const bakedPotato = await Recipes.find({name: 'Cheddar, Broccoli, and Baked Potato Chowder'})
  const calzone = await Recipes.find({name: 'Italian Sausage and Ricotta Calzone'})
  const classicCuban = await Recipes.find({name: 'Classic Cuban Sandwiches'})

  const directions = [
    {
      direction_order1: 'Combine chicken, BBQ sauce, orange juice and soy sauce in the pot and stir to combine.',
      direction_order2: 'Secure the lid, making sure the vent is closed.',
      direction_order3: 'Using the display panel select the MANUAL or PRESSURE COOK function*. Use the +/- keys and program the Instant Pot for 5 minutes.',
      direction_order4: 'When the time is up, quick-release the remaining pressure.',
      direction_order5: 'Carefully remove the chicken from the pot to a cutting board and cut into bite-sized chunks.',
      direction_order6: 'Remove 1/4 cup of cooking liquid and mix with cornstarch.',
      direction_order7: 'Stir cornstarch slurry, chicken and orange marmalade into the pot for 5-6 minutes until sauce has thickened, returning to SAUTE mode as needed.',
      direction_order8: 'Serve over cooked rice garnished with green onions and sesame seeds.',
      recipe_id: orangeChicken[0]._id
    },
    {
      direction_order1: 'Press the Sauté button on the Instant Pot® and heat ghee. Add onion and green pepper and sauté for 3–5 minutes until onions are translucent. Stir in garlic. Add the chicken breast skin-side down and brown for 3–4 minutes. Sprinkle the diced tomato over the chicken.',
      direction_order2: 'In a medium bowl, whisk together tomato sauce, paprika, and chicken broth. Pour over chicken. Lock lid.',
      direction_order3: 'Press the Poultry button and cook for the default time of 15 minutes.',
      direction_order4: 'When timer beeps, let pressure release naturally for 10 minutes. Quick-release any additional pressure until float valve drops and then unlock lid. Check the chicken using a meat thermometer to ensure the internal temperature is at least 165°F. Transfer chicken to a serving platter.',
      direction_order5: 'Whisk flour and sour cream into the juices in the Instant Pot®. Press the Sauté button, press the Adjust button to change the temperature to Less, and simmer unlidded for 5 minutes until sauce thickens. Season with salt and pepper. Pour sauce over chicken and serve warm.',
      recipe_id: chickenPaprikash[0]._id
    },
    {
      direction_order1: 'Add the pasta, water and salt to the pot and stir.',
      direction_order2: 'Select Pressure Cook on the Instant Pot and set the time for 3 Minutes.',
      direction_order3: 'Meanwhile, add the bread, rosemary, thyme, salt, garlic granules to a blender and pulse into bread crumbs. Remove and place into a bowl and set aside.',
      direction_order4: 'Now in an empty blender, add the cashews, garlic cloves, dijon mustard, olive oil, almond milk, pinch of salt and pepper and blend until smooth.',
      direction_order5: 'When the cooking program finished, remove the lid and stir through the cashew sauce and grated cheese.',
      direction_order6: 'Flatten the saucy pasta, then sprinkle over the breadcrumbs and change to the air fryer lid and secure on top of the pot.',
      direction_order7: 'Select Broil and set the temperature to 230°F and the time for 6 Minutes.',
      direction_order8: 'Cook until crispy, then enjoy!',
      recipe_id: veganPasta[0]._id
    },
    {
      direction_order1: 'Place a 6-qt Instant Pot on Sauté, Normal/Medium setting then add butter.',
      direction_order2: 'When melted, add onion and garlic and cook until softened. Stir in salt, pepper, and thyme.',
      direction_order3: 'Add potatoes and chicken broth. Scrape up any browned bits from the bottom of the pot with a spoon.',
      direction_order4: 'Pressure Cook on High for 10 Minutes . When the time is up, allow for 15 Minutes natural release, then carefully quick-release the rest of the pressure.',
      direction_order5: 'Mash potatoes slightly for a chunky texture.',
      direction_order6: 'Stir in broccoli, 1 cup of cheese, and sour cream, cover and let mixture stand 5 Minutes.',
      direction_order7: 'Ladle into bowls and top with remaining cheese, bacon, and green onions and hot pepper sauce (if using).',
      recipe_id: bakedPotato[0]._id
    },
    {
      direction_order1: 'Add the olive oil to a sauté pan on a burner over medium heat. Add the Italian sausage and sauté until browned, breaking up the sausage into smaller pieces with a wooden spoon, about 4-6 Minutes.',
      direction_order2: 'After the sausage is browned, add the minced onion and garlic to the same pan. Continue cooking for another 2-3 Minutes, or until translucent.',
      direction_order3: 'Add the tomato paste. Stir to combine and cook for another minute. Season with salt if necessary and set aside.',
      direction_order4: 'Cut the pizza dough into two equal rectangles. Layer half of the sausage filling on one side of the rectangle. Repeat with the other dough. Top each filling with half of the ricotta.',
      direction_order5: 'Take the bottom right corner of the rectangle and fold over diagonally to the top left corner, creating a triangle shape. Press the edges together to seal the dough and roll the seal upwards towards the center of the calzone. Create an indentation every ½ inch like an empanada, resembling a rolled crust shape.',
      direction_order6: 'Brush the tops of each calzone with the egg wash. Gently place into the air fryer basket.',
      direction_order7: 'Air Fry at 400°F / 205°C for 8-10 Minutes, or until the crust is golden brown. Do not flip over during cooking. Carefully remove from the basket and set aside to cool slightly before serving. Dust with parmesan cheese. Enjoy!',
      recipe_id: calzone[0]._id
    },
    {
      direction_order1: 'Season pork pieces with salt and pepper.',
      direction_order2: 'Add olive oil to the Instant Pot. Using the display panel select the SAUTE function.',
      direction_order3: 'When oil gets hot, brown the meat on 2 sides, 3 - 4 minutes per side. Meat will not be cooked through. Do not crowd the pot--you may have to work in batches. Transfer browned meat to a shallow dish and cover loosely with foil.',
      direction_order4: 'Add garlic to the pot and saute 1 - 2 minutes more.',
      direction_order5: 'Add broth, juices and zest to the pot and deglaze by using a wooden spoon to scrape the brown bits from the bottom of the pot. Put the meat back into to the pot, turning once to coat.',
      direction_order6: 'Turn the pot off by selecting CANCEL, then secure the lid, making sure the vent is closed.',
      direction_order7: 'Using the display panel select the MANUAL or PRESSURE COOK function*. Use the +/- keys and program the Instant Pot for 20 minutes.',
      direction_order8: 'When the time is up, let the pressure naturally release for 15 minutes, then quick-release the remaining pressure.',
      direction_order9: 'Carefully remove the meat from the pot to a cutting board. Allow to cool for 5 - 10 minutes and then slice thinly.',
      direction_order10: 'Split rolls lengthwise. Brush mustard on the bottom half and melted butter on top half.',
      direction_order11: 'Top evenly with pork, ham, and swiss. Set under the broiler just until the cheese is melted, 1 - 2 minutes.',
      direction_order12: 'Top with pickles and press the sandwich closed.',
      recipe_id: classicCuban[0]._id
    },
  ]

  await Directions.insertMany(directions)
  console.log('Created directions')
}

const run = async () => {
  await main()
    db.close()
}

run()