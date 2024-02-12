const mongoose = require('mongoose')

const directionSchema = new mongoose.Schema(
  {
    direction_order1: {type: String, required: true},
    direction_order2: {type: String, required: true},
    direction_order3: {type: String, required: true},
    direction_order4: {type: String, required: true},
    direction_order5: {type: String, required: true},
    direction_order6: {type: String, required: false},
    direction_order7: {type: String, required: false},
    direction_order8: {type: String, required: false},
    direction_order9: {type: String, required: false},
    direction_order10: {type: String, required: false},
    direction_order11: {type: String, required: false},
    direction_order12: {type: String, required: false},
    direction_order13: {type: String, required: false},
    direction_order14: {type: String, required: false},
    recipe_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipes', required: true}
  },
  {timestamps: true}
)

const Directions = mongoose.model('Directions', directionSchema)

module.exports = Directions