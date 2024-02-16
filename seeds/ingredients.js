const mongoose = require('mongoose')
const db = require('../db')
const Recipe = require('../models/recipe')
const Ingredient = require('../models/ingredient')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	try {
		const pekingDuckRecipe = await Recipe.findOne({ name: 'Peking Roast Duck' })
		const carbonaraRecipe = await Recipe.findOne({
			name: 'Spaghetti alla Carbonara',
		})
		const sushiRecipe = await Recipe.findOne({ name: 'Sushi' })

		const ingredients = [
			{
				recipe_id: pekingDuckRecipe._id,
				item: 'Whole duck',
				dollarCost: 30.0,
				substituteItem: 'None',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				item: 'Salt',
				dollarCost: 0.1,
				substituteItem: 'Soy sauce',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				item: 'Maltose',
				dollarCost: 0.1,
				substituteItem: 'Honey',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				item: 'Vingegar',
				dollarCost: 0.15,
				substituteItem: 'Apple cider vinegar',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				item: '2 Stalks Scallion',
				dollarCost: 0.5,
				substituteItem: 'Chives',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				item: '1 Garlic Head',
				dollarCost: 0.15,
				substituteItem: 'Jarred garlic',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				item: '2 Apples',
				dollarCost: 0.75,
				substituteItem: 'Pear',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				item: '4 Star Anise',
				dollarCost: 1.0,
				substituteItem: 'All Spice',
			},
			{
				recipe_id: carbonaraRecipe._id,
				item: 'Spaghetti',
				dollarCost: 2.0,
				substituteItem: 'Linguine',
			},
			{
				recipe_id: carbonaraRecipe._id,
				item: 'Eggs',
				dollarCost: 0.5,
				substituteItem: 'Egg substitute',
			},
			{
				recipe_id: carbonaraRecipe._id,
				item: 'Grated Parmesan',
				dollarCost: 2.0,
				substituteItem: 'Grated Pecorino Romano',
			},
			{
				recipe_id: carbonaraRecipe._id,
				item: 'Pancetta',
				dollarCost: 5.5,
				substituteItem: 'Bacon',
			},
			{
				recipe_id: carbonaraRecipe._id,
				item: 'Olive oil',
				dollarCost: 0.5,
				substituteItem: 'Vegetable oil',
			},
			{
				recipe_id: carbonaraRecipe._id,
				item: 'Garlic',
				dollarCost: 0.1,
				substituteItem: 'Garlic powder',
			},
			{
				recipe_id: carbonaraRecipe._id,
				item: 'Fresh ground black pepper',
				dollarCost: 0.2,
				substituteItem: 'Ground white pepper',
			},
			{
				recipe_id: carbonaraRecipe._id,
				item: 'Parsley',
				dollarCost: 0.3,
				substituteItem: 'Cilantro',
			},
			{
				recipe_id: sushiRecipe._id,
				item: 'Sushi rice',
				dollarCost: 1.5,
				substituteItem: 'Short grain rice',
			},
			{
				recipe_id: sushiRecipe._id,
				item: 'Rice vinegar',
				dollarCost: 1.0,
				substituteItem: 'Apple cider vinegar',
			},
			{
				recipe_id: sushiRecipe._id,
				item: 'Kewpie mayonnaise',
				dollarCost: 1.0,
				substituteItem: 'Mayonnaise',
			},
			{
				recipe_id: sushiRecipe._id,
				item: 'Nori sheets',
				dollarCost: 2.0,
				substituteItem: 'Cucumber',
			},
			{
				recipe_id: sushiRecipe._id,
				item: 'Crabmeat',
				dollarCost: 14.5,
				substituteItem: 'Imitation Crabmeat',
			},
			{
				recipe_id: sushiRecipe._id,
				item: 'Avocado',
				dollarCost: 1.5,
				substituteItem: 'None',
			},
			{
				recipe_id: sushiRecipe._id,
				item: 'Cucumber',
				dollarCost: 0.5,
				substituteItem: 'Zucchini',
			},
		]

		await Ingredient.insertMany(ingredients)
		console.log('Created some ingredients!')
	} catch (error) {
		console.error('Error seeding ingredients.', error)
	}
}

const run = async () => {
	await main()
	db.close()
}

run()
