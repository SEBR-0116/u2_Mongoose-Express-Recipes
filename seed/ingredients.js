const db = require('../db')
const Ingredients = require('../models/ingredients')
const Cuisine = require('../models/cuisine_type')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Banana = await Cuisine.find( {cuisine_name: 'Banana Bread'}) 
    const EggsBen = await Cuisine.find( {cuisine_name: 'Eggs Benedict'})
    const Velveeta = await Cuisine.find( {cuisine_name: 'Velveeta Spicy Sausage Dip'})

    const ingredient = [
        { 
            cuisine: Banana[0]._id,
            list: "2 cups all-purpose flour, 1 teaspoon baking soda, ¼ teaspoon salt, ¾ cup brown sugar, ½ cup butter, 2 large eggs beaten, 2 ⅓ cups mashed,overripe bananas"
        },
        { 
            cuisine: EggsBen[0]._id,
            list: "Hollandaise Sauce: 4 egg yolks, 1 to 3 ½ tablespoons lemon juice, to suit your taste, 1 tablespoon water, ⅛ teaspoon Worcestershire sauce, 1 pinch ground white pepper, 1 cup butter, melted, 1 teaspoon hot water, or more as needed (Optional), 1/4 teaspoon salt, or to taste / Eggs Benedict: 1 teaspoon distilled white vinegar, 8 eggs, 8 strips Canadian-style bacon, 4 English muffins, split, 2 tablespoons butter, softened"
        },
        { 
            cuisine: Velveeta[0]._id,
            list: "1 pound Velveeta, cut into 1/2-inch cubes, 1 (10 ounce) can RO*TEL Diced Tomatoes and Green Chilies, undrained, ½ pound breakfast pork sausage, cooked, drained"
        }
    ]

    await Ingredients.insertMany(ingredient)
    console.log("Created ingredients")

}

const run = async () => {
await main()
db.close()
}

run()