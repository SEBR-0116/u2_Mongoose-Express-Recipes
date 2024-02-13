const mongoose = require('mongoose')
const db = require('../db')
const Direction = require('../models/direction')
const Recipe = require('../models/recipie')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
        const cuisineId1 = '65ca530b732ab7a70ed01a07'
        const cuisineId2 = '65ca67dcfc409864ad50e055'
        const cuisineId3 = '65ca699bfc409864ad50e056'

//Recipe 1
        const recipe1 = new Recipe({ name: 'Sweet Potato Waffles', cuisine: cuisineId1})

        const directions1 = [
            { stepNumber: 1, description: 'In a large mixing bowl, conbine the all-pirpose flour, baking powder, pumpkin pie spice, and kosher salt. Whisk these dry ingredients until well-mixed' },
            { stepNumber: 2, description: 'In a seperate bowlm whisk together the eggs, milk, melted unsalted butter, maple syrup, and vanilla extract until smooth.' },
            { stepNumber: 3, description: `Add the wet ingredients to the dry ingredients and whisk just until combined. Remember, it's okay if there are some lumps.` },
            { stepNumber: 4, description: `Gently fold in the mashed sweet potato puree until it's incorporated into the batter.` },
            { stepNumber: 5, description: `Preheat your waffle iron according to the manufacturer's instructions and lightly coat it with oil or butter.` },
            { stepNumber: 6, description: `Pour enough batter into the waffle iron to just cover the waffle grid.` },
            { stepNumber: 7, description: `Close the waffle maker and follow the manufacturer's instructions, usually for 5 minutes, until the waffle is golden.` },
            { stepNumber: 8, description: `Carefully remove the waffle and serve immediately with your choice of toppings, such as additional maple syrup.` },
            { stepNumber: 9, description: `Repeat with the remaining batter.` },
        ];

        for (const directionData of directions1) {
            const direction = new Direction(directionData);
            recipe1.directions.push(direction)
            await direction.save()
        }
        await recipe1.save();

//Recipe 2
        const recipe2 = new Recipe({ name: "Fried Cornbread Pancakes", cuisine: cuisineId2})

        const directions2 = [
            { stepNumber: 1, description: `In a sizable mixing bowl, blend cornmeal, self-rising flour, baking powder, salt, and sugar uniformly using a fork.`},
            { stepNumber: 2, description: `Combine buttermilk and egg in a measuring cup, stirring them together. Integrate this liquid mixture into the dry ingredients bowl until no dry spots remain, forming a dough-like consistency.`},
            { stepNumber: 3, description: `Heat the initial ¼ cup of vegetable oil in a 10-inch skillet over medium heat. Scoop a generous tablespoon of the dough into the hot oil, frying three or four at a time. Fry each side until golden brown, roughly 2-3 minutes per side.`},
            { stepNumber: 4, description: `After frying, transfer to a plate lined with paper towels to drain, continuing to cook the rest of the cornbread. Midway through, add the remaining ¼ cup of oil to the skillet for ongoing frying.`},
            { stepNumber: 5, description: `Serve the cooked cornbread promptly, either as a starter or a side dish.`}
        ]

        for (const directionData of directions2) {
            const direction = new Direction(directionData);
            recipe2.directions.push(direction)
            await direction.save()
        }
        await recipe2.save();


// Recipe 3

    const recipe3 = new Recipe({ name: "Cheesy Hashbrown Casserole", cuisine: cuisineId3})

    const directions3 = [
        { stepNumber: 1, description: `Adjust the oven's rack to the middle position and preheat the oven to 350℉/177℃. Lightly grease a 9"x13" casserole dish with cooking spray.`},
        { stepNumber: 2, description: `Place a cast-iron skillet or pan over medium-low heat, add bacon and cook until golden and crisp, 4-6 minutes. Transfer the bacon bits to a paper-towel-lined plate and set aside. Pour off all except 1 tablespoon of the bacon drippings.`},
        { stepNumber: 3, description: `Add the chopped onions, garlic, and green bell pepper to the pan and cook until the onions are translucent and softened (3-4 minutes). Remove the skillet from the stove and set it aside.`},
        { stepNumber: 4, description: `In a large bowl, add thawed hash brown potatoes, condensed cream of chicken soup, sour cream, melted butter, shredded cheese (reserve ¼ cup for the topping), cooked onion and pepper mixture, half of the bacon bits, salt, and pepper. Stir using a spatula until thoroughly combined.`},
        { stepNumber: 5, description: `Pour the hash brown potato mixture into your prepared baking pan and press down slightly, creating an even layer. Cover it with foil, then bake for 45-50 minutes, or until it bubbles. The internal temperature should register at least 165-175°F/75-80℃.`},
        { stepNumber: 6, description: `Remove the foil, top with the reserved shredded cheese, and bake for 15 more minutes, or until golden brown and bubbly.`},
        { stepNumber: 7, description: `Remove the hash brown casserole from the oven and let it rest for 5-10 minutes before serving. Garnish with chopped green onions and the remaining bacon. Enjoy!`},
    ]

for (const directionData of directions3) {
    const direction = new Direction(directionData);
    recipe3.directions.push(direction)
    await direction.save()
}
await recipe3.save();





        console.log('Directions seeded successfully');
    } catch (error) {
        console.error('Error seeding directions:', error);
    } finally {
        mongoose.connection.close();
    }
}

main()