const mongoose = require('mongoose')
const db = require('../db')
const Direction = require('../models/direction')
const Recipe = require('../models/recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	try {
		const pekingDuckRecipe = await Recipe.findOne({ name: 'Peking Roast Duck' })
		const carbonaraRecipe = await Recipe.findOne({
			name: 'Spaghetti alla Carbonara',
		})
		const sushiRecipe = await Recipe.findOne({ name: 'Sushi' })

		const directions = [
			{
				recipe_id: pekingDuckRecipe._id,
				cookTime: 20,
				steps: '1',
				description: 'Clean the duck and rub salt over the skin and cavity.',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				cookTime: 10,
				steps: '2',
				description:
					'Bring 6 cups to a boil and gently pour or laddle water over entire duck skin.',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				cookTime: 120,
				steps: '3',
				description:
					'Mix maltose with hot water and vinegar until fully dissolved and brush mixture over the duck skin. Leave to rest in the fridge for 1 hour. Keep uncovered for 24-48 hours.',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				cookTime: 15,
				steps: '4',
				description:
					'Bring duck to room temp 1 hour before roasting and put all stuff ingredients into the cavity.',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				cookTime: 15,
				steps: '5',
				description:
					'Pre-heat conventional oven to 425 degrees F and put duck in the middle rack for 15 minutes once up to temp.',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				cookTime: 15,
				steps: '6',
				description:
					'Lower to 390 degrees F and use foil to cover the tip of the wings. Continue cooking for 1 hour (check temp - no lower than 165 degrees F)',
			},
			{
				recipe_id: pekingDuckRecipe._id,
				cookTime: 15,
				steps: '7',
				description:
					'Take duck out to rest for 15 minutes before slicing. While waiting, add 1/2 tbsp of duck fat collected and add sugar and sweet bean sauce into a pan. Mix and simmer over low heat until incorporated',
			},
			{
				recipe_id: carbonaraRecipe._id,
				cookTime: 10,
				steps: '1',
				description:
					'Bring large pot of water to a boil and add spaghetti until al dente (8-10 minutes). In a separate bowl, whisk together eggs and grated Parmesan.',
			},
			{
				recipe_id: carbonaraRecipe._id,
				cookTime: 2,
				steps: '2',
				description:
					'Reserve about half a cup of water and drain pot. In a separate bowl, whisk together eggs and grated Parmesan.',
			},
			{
				recipe_id: carbonaraRecipe._id,
				cookTime: 3,
				steps: '3',
				description:
					'Heat olive oil in deep skillet and saute pancetta with some garlic until crispy. Let it cool slightly.',
			},
			{
				recipe_id: carbonaraRecipe._id,
				cookTime: 3,
				steps: '4',
				description:
					'Toss the cooked spaghetti with the pancetta and garlic, then pour in the egg and cheese mixture, combining quickly to coat the pasta and form a creamy sauce. Thin out sauce with reserved water if needed.',
			},
			{
				recipe_id: carbonaraRecipe._id,
				cookTime: 2,
				steps: '5',
				description:
					'Season to taste with fresh ground black pepper topped with parsley and serve hot',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 18,
				steps: '1',
				description:
					'Cook and prepare sushi rice and add rice vinegar and salt. Let cool after cooked.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 5,
				steps: '2',
				description:
					'Take the imitation crab meat and cut them into small pieces(about 3millimeters). Add kewpie mayonnaise and mix with the crab.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 5,
				steps: '3',
				description: 'Slice avocado into slices and julienne cucumumber.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 2,
				steps: '4',
				description:
					'Cut nori sheets into half sizes(depending on type you buy.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 1,
				steps: '5',
				description:
					'Wet hands and take 1/4 cup of rice and layer evenly onto sheet.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 5,
				steps: '6',
				description:
					'Turn nori sheets with rice over and add crabmeat and mayonnaise mixture along the middle.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 3,
				steps: '7',
				description:
					'Layer avocado and cucumbers horizontally along the mixture.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 10,
				steps: '8',
				description:
					'Take bottom edge of nori sheets and slowly move over the filling. Keep roll tight and roll upwards.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 0,
				steps: '9 (optional)',
				description:
					'Wrap sheet of cling wrap around the roll and roll as if it is a rolling pin.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 10,
				steps: '10',
				description:
					'Take a sharp knife and cut in half multiple times in one long stroke until desired size. Remove wrap after cutting.',
			},
			{
				recipe_id: sushiRecipe._id,
				cookTime: 1,
				steps: '11',
				description: 'Serve and enjoy with soy sauce and wasabi!',
			},
		]
		await Direction.insertMany(directions)
		console.log('Created some directions!')
	} catch (error) {
		console.error('Error seeding directions', error)
	}
}
const run = async () => {
	await main()
	db.close()
}

run()
