const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Direction = new Schema(
	{
		recipe_id: { type: Schema.Types.ObjectId, ref: 'Recipe' },
		cookTime: { type: Number, required: true },
		steps: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('direction', Direction)
