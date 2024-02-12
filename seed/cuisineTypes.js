const db = require("../db");
const Cuisine = require("../models/cuisineType");

db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
  const cuisine = [
    {
      type: "Italian",
      location: "Italy",
      specialDiet: ["Vegan", "Kosher", "Gluten-Free"],
    },
  ];
  try {
    await Cuisine.insertMany(cuisine);
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
