const mongoose = require('mongoose')
const db = require('../db')
const Recipe = require('../models/recipe')
const CuisineType = require('../models/cuisineType')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	try {
		const chineseCuisine = await CuisineType.findOne({ type: 'Chinese' })
		const italianCuisine = await CuisineType.findOne({ type: 'Italian' })
		const japaneseCuisine = await CuisineType.findOne({ type: 'Japanese' })

		const recipes = [
			{
				name: 'Peking Roast Duck',
				description:
					'Iconic Beijing dish consisting of sliced pieces of roast duck with crispy skin and tender meat. Traditionally served with pancakes, spring onions, and hoisin sauce.',
				cookTime: 240,
				image:
					'https://omnivorescookbook.com/wp-content/uploads/2017/05/1705_Chinese-Crispy-Duck-Breast_003.jpg',
				cuisineType: chineseCuisine._id,
			},
			{
				name: 'Spaghetti alla Carbonara',
				description:
					'A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
				cookTime: 20,
				image:
					'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg',
				cuisineType: italianCuisine._id,
			},
			{
				name: 'Sushi',
				description:
					'Traditional Japanese dish with raw fish sliced thinly served with soy sauce and wasabi.',
				cookTime: 50,
				image:
					'https://therecipecritic.com/wp-content/uploads/2023/08/california_roll.jpg',
				cuisineType: japaneseCuisine._id,
			},
		]
		await Recipe.insertMany(recipes)
		console.log('Recipes created!')
	} catch (error) {}
}

const run = async () => {
	await main()
	db.close()
}

run()
