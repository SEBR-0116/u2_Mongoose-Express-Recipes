const db = require("../db");
const Recipe = require("../models/recipe");

const main = async () => {
  const italian = "65ca53a7cfd4a35f79443ceb";
  const Recipes = [
    {
      name: "Spaghetti Carbonara",
      description:
        "Spaghetti Carbonara is a classic pasta dish from Rome made with eggs, cheese, pancetta and pepper. Spaghetti pasta is tossed in the pan with the pancetta and bacon fat then the eggs and cheese are added to create a creamy sauce.",
      cookingTime: "30 minutes",
      ImageUrl: `https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg`,
      refCuisineType: italian,
    },
    {
      name: "Chicken Alfredo",
      description:
        "Chicken Alfredo is a classic Italian-American dish made with cooked fettuccine pasta and tossed in a creamy parmesan sauce. It is often served with grilled chicken, shrimp or broccoli.",
      cookingTime: "30 minutes",
      ImageUrl: `https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg`,
      refCuisineType: italian,
    },
    {
      name: "vegetable lasagna",
      description:
        "Vegetable lasagna is a vegetarian version of the classic Italian lasagna made with layers of vegetables, cheese, and lasagna noodles.",
      cookingTime: "1 hour",
      ImageUrl: `https://www.inspiredtaste.net/wp-content/uploads/2016/10/Easy-Vegetable-Lasagna-Recipe-1200.jpg`,
      refCuisineType: italian,
    },
  ];
  try {
    await Recipe.insertMany(Recipes);
    console.log("Mamma Mia!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
const run = async () => {
  await main();
  db.close();
};
run();
