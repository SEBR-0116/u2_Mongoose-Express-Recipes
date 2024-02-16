const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Ingredient = new Schema(
	{
		recipe_id: { type: Schema.Types.ObjectId, ref: 'Recipe' },
		item: { type: String, required: true },
		dollarCost: { type: Number, required: true },
		substituteItem: { type: String, required: true },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('ingredient', Ingredient)
