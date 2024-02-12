const db = require("../db");
const Ingredient = require("../models/ingredient");

const main = async () => {
  const spaghettiCarbonara = "65ca5da20cb27b6740cb9edc";
  const chickenAlfredo = "65ca5da20cb27b6740cb9edd";
  const vegetableLasagna = "65ca5da20cb27b6740cb9ede";
  const Ingredients = [
    {
      cost: 20.0,
      items: `Salt,
            2large eggs and 2 large yolks, room temperature,
            1ounce (about ⅓ packed cup) grated pecorino Romano, plus additional for serving,
            1ounce (about ⅓ packed cup) grated Parmesan,
            Coarsely ground black pepper,
            1tablespoon olive oil,
            3½ounces of slab guanciale (see recipe), pancetta or bacon, sliced into pieces about ¼ inch thick by ⅓ inch square,
            12ounces spaghetti (about ¾ box),`,
      subsitituteItem: `Chicken,Shrimp,Ground Beef`,
      refRecipes: spaghettiCarbonara,
    },
    {
      cost: 17.63,
      items: `10tablespoons unsalted butter
        2large boneless skinless chicken breasts (1 pound total), patted dry
        Kosher salt (such as Diamond Crystal) and black pepper
        2tablespoons extra-virgin olive oil
        1pound fettuccine, linguine or spaghetti
        1½cups heavy cream
        6ounces (about 2 cups) freshly grated Parmigiano-Reggiano
        Fresh nutmeg, for grating (optional)
        Fresh chopped parsley, for serving (optional)`,
      subsitituteItem: "Shrimp",
      refRecipes: chickenAlfredo,
    },
    {
      cost: 19.89,
      items: `2 tablespoons extra-virgin olive oil
        3 large carrots, chopped (about 1 cup)
        1 red bell pepper, chopped
        1 medium zucchini, chopped
        1 medium yellow onion, chopped
        ¼ teaspoon salt
        5 to 6 ounces baby spinach
        large can (28 ounces) diced tomatoes
        ¼ cup roughly chopped fresh basil + additional for garnish
        2 tablespoons extra-virgin olive oil
        2 cloves garlic, pressed or minced
        ½ teaspoon salt
        ¼ teaspoon red pepper flakes
        2 cups (16 ounces) low-fat cottage cheese, divided
¼ teaspoon salt, to taste
Freshly ground black pepper, to taste
9 no-boil lasagna noodles*
8 ounces (2 cups) freshly grated low-moisture, part-skim mozzarella cheese`,
      subsitituteItem: "Any Vegetable you like",
      refRecipes: vegetableLasagna,
    },
  ];
  try {
    await Ingredient.insertMany(Ingredients);
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
