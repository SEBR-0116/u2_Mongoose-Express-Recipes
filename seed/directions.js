const db = require("../db");
const Direction = require("../models/direction");

const main = async () => {
  const spaghettiCarbonara = "65ca5da20cb27b6740cb9edc";
  const chickenAlfredo = "65ca5da20cb27b6740cb9edd";
  const vegetableLasagna = "65ca5da20cb27b6740cb9ede";
  const Directions = [
    {
      steps: `Step 1
        Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat, and bring to a boil. Fill a large bowl with hot water for serving, and set aside.
        
        Step 2
        In a mixing bowl, whisk together the eggs, yolks and pecorino and Parmesan. Season with a pinch of salt and generous black pepper.
        
        Step 3
        Set the water to boil. Meanwhile, heat oil in a large skillet over medium heat, add the pork, and sauté until the fat just renders, on the edge of crispness but not hard. Remove from heat and set aside.
        
        Step 4
        Add pasta to the water and boil until a bit firmer than al dente. Just before pasta is ready, reheat guanciale in skillet, if needed. Reserve 1 cup of pasta water, then drain pasta and add to the skillet over low heat. Stir for a minute or so.
        
        Step 5
        Empty serving bowl of hot water. Dry it and add hot pasta mixture. Stir in cheese mixture, adding some reserved pasta water if needed for creaminess. Serve immediately, dressing it with a bit of additional grated pecorino and pepper.`,
      description: `This dish is a deli bacon-egg-and-cheese-on-a-roll that has been pasta-fied, fancified, fetishized and turned into an Italian tradition that, like many inviolate Italian traditions, is actually far less old than the Mayflower. Because America may have contributed to its creation, carbonara is Exhibit A in the back-and-forth between Italy and the United States when it comes to food. Remember: the main goal is creaminess.`,
      refRecipes: spaghettiCarbonara,
    },
    {
      steps: `Step 1
        In a large skillet over medium-high heat, heat oil. Add chicken; season with salt and pepper. Cook, turning occasionally, until golden brown and cooked through, about 8 minutes per side. Transfer to a cutting board. Let rest 10 minutes, then slice.
        Step 2
        In same skillet over medium heat, combine broth, milk, and garlic; season with salt and pepper. Bring to a simmer. Add fettuccine and cook, tossing occasionally, until barely al dente, about 10 minutes.
        Step 3
        Stir in Parmesan and cream. Bring to a simmer and cook, stirring frequently, until sauce thickens and pasta is al dente, 2 to 3 minutes.
        Step 4
        Remove from heat and stir in chicken. Top with parsley.`,
      description: `Chicken Alfredo is a beginner-friendly dish that truly anyone can master. With a creamy, cheesy sauce and tender chicken breasts, it's the pasta dish we turn to time and time again when we're craving the ultimate comfort meal.`,
      refRecipes: chickenAlfredo,
    },
    {
      steps: `Preheat the oven to 425 degrees Fahrenheit.
        To prepare the veggies: In a large skillet over medium heat, warm the olive oil. Once shimmering, add the carrots, bell pepper, zucchini, yellow onion, and salt. Cook, stirring every couple of minutes, until the veggies are golden on the edges, about 8 to 12 minutes.
        Add a few large handfuls of spinach. Cook, stirring frequently, until the spinach has wilted. Repeat with remaining spinach and cook until all of the spinach has wilted, about 3 minutes. Remove the skillet from the heat and set aside.
        Meanwhile, to prepare the tomato sauce: Pour the tomatoes into a mesh sieve or fine colander and drain off the excess juice for a minute. Then, transfer the drained tomatoes to the bowl of a food processor. Add the basil, olive oil, garlic, salt, and red pepper flakes.
        Pulse the mixture about 10 times, until the tomatoes have broken down to an easily spreadable consistency. Pour the mixture into a bowl for later (you should have a little over 2 cups sauce). Rinse out the food processor and return it to the machine.
        Pour half of the cottage cheese (1 cup) into the processor and blend it until smooth, about 1 minute. Transfer the mixture to large mixing bowl. No need to rinse out the bowl of the food processor this time; just put it back onto the machine because you’ll need it later.
        Transfer the cooked veggies and spinach mixture to the bowl of the food processor. Pulse until they are more finely chopped (but not puréed!), about 5 to 7 times, stopping to scrape down the sides as necessary. Transfer the mixture to the bowl of whipped cottage cheese. Top with the remaining cottage cheese, then add ¼ to ½ teaspoon salt (to taste) and lots of freshly ground black pepper. Stir to combine. Now it’s lasagna assembly time!
        Spread ½ cup tomato sauce evenly over the bottom of a 9” by 9” baking dish. Layer 3 lasagna noodles on top (snap off their ends to fit, and/or overlap their edges as necessary). Spread half of the cottage cheese mixture evenly over the noodles. Top with ¾ cup tomato sauce, then sprinkle ½ cup shredded cheese on top.
        Top with 3 more noodles, followed by the remaining cottage cheese mixture (we’re skipping the tomato sauce in this layer.) Sprinkle ½ cup shredded cheese on top.
        Top with 3 more noodles, then spread ¾ cup tomato sauce over the top (you may have a little sauce leftover) to evenly cover the noodles. Sprinkle evenly with 1 cup shredded cheese.
        Wrap a sheet of parchment paper or foil around the top of the lasagna (don’t let it come into contact with the cheese). Bake, covered, for 18 minutes, then remove the cover, rotate the pan by 180° and continue cooking for about 10 to 12 more minutes, until the top is turning spotty brown.
        Remove from oven and let the lasagna cool for 15 to 20 minutes, so it has time to set and cool down to a reasonable temperature. Sprinkle additional basil over the top, then slice and serve.`,
      description: `Seriously the best veggie lasagna! This lasagna recipe is packed with bell pepper, zucchini and carrots, sautéed until golden and tender on the edges. Recipe yields one 9-inch lasagna, enough for 8 slices.`,
      refRecipes: vegetableLasagna,
    },
  ];
  try {
    await Direction.insertMany(Directions);
    console.log("Look Ma Im Cooking!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
const run = async () => {
  await main();
  db.close();
};
run();
