const db = require('../db')
const mongoose = require('mongoose');
const CuisineType = require('../models/cuisine');
const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');
const Direction = require('../models/direction');

mongoose.connect('mongodb://localhost/recipesDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const seed = async () => {
  try {
    // Seed Cuisine Types
    const cuisineType1 = await CuisineType.create({
      name: 'Italian',
      description: 'Traditional Italian Cuisine',
    });

    const cuisineType2 = await CuisineType.create({
      name: 'Mexican',
      description: 'Authentic Mexican Cuisine',
    });

    const cuisineType3 = await CuisineType.create({
      name: 'Japanese',
      description: 'Classic Japanese Dishes',
    });

    // Seed Ingredients
    const ingredient1 = await Ingredient.create({
      name: 'Tomato',
      quantity: 2,
      unit: 'pcs',
    });

    const ingredient2 = await Ingredient.create({
      name: 'Cheese',
      quantity: 200,
      unit: 'g',
    });

    const ingredient3 = await Ingredient.create({
      name: 'Chicken',
      quantity: 500,
      unit: 'g',
    });

    // Seed Directions
    const direction1 = await Direction.create({
      step: 1,
      instruction: 'Chop tomatoes.',
    });

    const direction2 = await Direction.create({
      step: 2,
      instruction: 'Grate cheese.',
    });

    const direction3 = await Direction.create({
      step: 3,
      instruction: 'Cook chicken until golden brown.',
    });

    // Seed Recipes
    const recipe1 = await Recipe.create({
      name: 'Margherita Pizza',
      cuisineType: cuisineType1._id,
      ingredients: [ingredient1._id, ingredient2._id],
      directions: [direction1._id, direction2._id],
      vegan: false,
      glutenFree: false,
      kosher: false,
      halal: false,
    });

    const recipe2 = await Recipe.create({
      name: 'Guacamole',
      cuisineType: cuisineType2._id,
      ingredients: [ingredient1._id],
      directions: [direction1._id],
      vegan: true,
      glutenFree: true,
      kosher: false,
      halal: true,
    });

    const recipe3 = await Recipe.create({
      name: 'Sushi Rolls',
      cuisineType: cuisineType3._id,
      ingredients: [ingredient1._id, ingredient3._id],
      directions: [direction1._id, direction3._id],
      vegan: false,
      glutenFree: true,
      kosher: false,
      halal: true,
    });

    console.log('Database seeded with sample data');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.connection.close();
  }
};

seed();
