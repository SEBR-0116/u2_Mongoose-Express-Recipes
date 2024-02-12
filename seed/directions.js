const db = require('../db')
const Directions = require('../models/directions')
const Cuisine = require('../models/cuisine_type')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const Banana = await Cuisine.find( {cuisine_name: 'Banana Bread'}) 
    const EggsBen = await Cuisine.find( {cuisine_name: 'Eggs Benedict'})
    const Velveeta = await Cuisine.find( {cuisine_name: 'Velveeta Spicy Sausage Dip'})

    const directions = [
        { 
            cuisine: Banana[0]._id,
            steps: [{step1: "Preheat the oven to 350 degrees F (175 degrees C). Lightly grease a 9x5-inch loaf pan."}, {step2: "Combine flour, baking soda, and salt in a large bowl. Beat brown sugar and butter with an electric mixer in a separate large bowl until smooth. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture until just combined. Pour batter into the prepared loaf pan."}, {step3: "Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 60 minutes. Let bread cool in pan for 10 minutes, then turn out onto a wire rack to cool completely."}]
        },
        { 
            cuisine: EggsBen[0]._id,
            steps: [{step1: "To make the Hollandaise: Whisk egg yolks, lemon juice, 1 tablespoon of water, Worcestershire sauce, and white pepper in the top of a double boiler over simmering water. Add melted butter, 1 or 2 tablespoons at a time, while whisking yolks constantly. If Hollandaise begins to get too thick, add a teaspoon or two of hot water. Continue whisking until all of the butter is incorporated. Whisk in salt, then remove from heat. Place a lid on the pan to keep sauce warm."}, {step2: "To poach the eggs: Fill a large saucepan with 2 to 3 inches of water and bring to a boil. Reduce heat to medium-low, pour in vinegar, and keep water at a gentle simmer. Crack an egg into a small bowl then gently slip egg into simmering water, holding the bowl just above the surface of water. Repeat with the remaining eggs. Cook eggs until whites are firm and yolks have thickened but are not hard, 2 1/2 to 3 minutes. Remove eggs from water with a slotted spoon, dab on a kitchen towel to remove excess water, and place onto a warm plate."}, {step3: "Meanwhile, set an oven rack about 6 inches from the heat source and preheat the oven's broiler. Brown bacon in a medium skillet over medium-high heat."}, {step4: "Toast English muffins on a baking sheet under the preheated broiler."}, {step5: "To serve eggs Benedict: Spread toasted muffins with softened butter and top each one with a slice of bacon, followed by one poached egg. Place 2 muffins on each plate and drizzle with Hollandaise sauce. Sprinkle with chopped chives and serve immediately."}]
        },
        { 
            cuisine: Velveeta[0]._id,
            steps: [{step1: "Gather all ingredients."}, {step2: "Mix Velveeta, Ro-Tel, and cooked pork sausage together in a microwave-safe bowl."}, {step3: "Microwave on high for 3 minutes. Stir, and microwave until Velveeta is completely melted, about 2 more minutes. Store leftover dip in an airtight container in the refrigerator for up to 3 days. Reheat dip in the microwave before serving."}]
        }
    ]

    await Directions.insertMany(directions)
    console.log("Created directions")

}

const run = async () => {
await main()
db.close()
}

run()
