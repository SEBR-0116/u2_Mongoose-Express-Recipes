const {Schema} = require('mongoose')

const Ingredient = new Schema(
    {
        items:  {type: Array, default: []},
        recipeId: {type: Schema.Types.ObjectId, default:null, ref: 'Recipe'}
    },

    { timestamps: true }
)

module.exports = Ingredient