const db = require('../db')
const CuisineType = require('../models/cuisineType')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	const cuisineTypes = [
		{
			type: 'Chinese',
			location: 'China',
			specialDiet: {
				vegan: true,
				kosher: false,
				glutenFree: false,
				vegetarian: true,
			},
		},
		{
			type: 'Italian',
			location: 'Italy',
			specialDiet: {
				vegan: true,
				kosher: false,
				glutenFree: true,
				vegetarian: true,
			},
		},
		{
			type: 'Japanese',
			location: 'Japan',
			specialDiet: {
				vegan: false,
				kosher: false,
				glutenFree: false,
				vegetarian: false,
			},
		},
	]

	await CuisineType.insertMany(cuisineTypes)
	console.log('Created cuisine types!')
}

const run = async () => {
	await main()
	db.close()
}

run()
