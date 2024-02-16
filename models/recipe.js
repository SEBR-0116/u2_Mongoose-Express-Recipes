const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Recipe = new Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		cookTime: { type: Number, required: true },
		image: { type: String, required: true },
		cuisineType: { type: Schema.Types.ObjectId, ref: 'CuisineType' },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('recipe', Recipe)
