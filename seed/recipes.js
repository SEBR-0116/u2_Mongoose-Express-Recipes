const db = require("../db");
const Recipe = require("../models/recipe");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const recipes = [
    {
      title: "Pancakes with berries",
      description:
        "Healthy food doesn't need to be boring! These delicious three-ingredient pancakes topped with yoghurt and berries prove it.",
      cookTime: "5m",
      ingredients: [
        "65ca47e2318ad7c47b371d1b",
        "65ca47e2318ad7c47b371d1c",
        "65ca47e2318ad7c47b371d1d",
        "65ca47e2318ad7c47b371d1e",
      ],
      instructions:
        "Step 1: Place the banana, egg and spelt flour in a food processor. Process until smooth. Step 2: Lightly spray a non-stick frying pan with oil and place over medium heat. Transfer 60ml (1/4 cup) pancake mixture to pan. Cook for 1 minute or until bubbles appear on surface. Carefully turn over and cook for 1 minute or until golden. Repeat to make 2 more pancakes. Step 3: Transfer to a serving plate and top with yoghurt and berries.",
      servings: 1,
      healthy: true,
    },

    {
      title: "Chicken-noodle frittata",
      description:
        "Frittata doesn't get easier than this! Four basic, budget-friendly ingredients combine to make this tasty kid-friendly meal.",
      cookTime: "15m",
      ingredients: [
        "65ca47e2318ad7c47b371d1f",
        "65ca47e2318ad7c47b371d20",
        "65ca47e2318ad7c47b371d21",
        "65ca47e2318ad7c47b371d1c",
      ],
      instructions:
        "Break the 2 minute noodles into 3cm pieces. Place in a heatproof bowl. Add the flavour sachet from the packet and frozen peas. Cover with boiling water and set aside for 2 minutes or until tender. Drain. Preheat grill on medium. Heat olive oil in a 20cm (base measurement) non-stick frying pan over medium heat. Add the noodle mixture to the pan. Pour over eggs, lightly whisked. Cook for 3 minutes or until set around the edge but still runny in the centre. Place the pan under the grill and cook for 3 minutes or until set. Cut into quarters to serve.",
      servings: 4,
      healthy: false,
    },
    {
      title: "Classic Nachos",
      description:
        "For a quick and easy snack try these 3-ingredient cheese jalapeño nachos.",
      cookTime: "10m",
      ingredients: [
        "65ca47e2318ad7c47b371d22",
        "65ca47e2318ad7c47b371d23",
        "65ca47e2318ad7c47b371d24",
      ],
      instructions:
        "Preheat the oven grill on medium. Place half the corn chips in a 15cm (base measurement) ovenproof frying pan or round dish. Sprinkle with half the cheddar. Repeat with the remaining corn chips and cheddar. Grill for 3-5 minutes or until the cheddar is melted and bubbling. Sprinkle with jalapeños to serve.",
      servings: 2,
      healthy: false,
    },
  ];

  await Recipe.insertMany(recipes);
  console.log("Created Recipes!");
};

const run = async () => {
  await main();
  db.close();
};

run();
