const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const CuisineType = new Schema(
	{
		type: { type: String, required: true },
		location: { type: String, required: true },
		specialDiet: {
			vegan: { type: Boolean, default: false },
			kosher: { type: Boolean, default: false },
			glutenFree: { type: Boolean, default: false },
			vegetarian: { type: Boolean, default: false },
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('cuisineType', CuisineType)
