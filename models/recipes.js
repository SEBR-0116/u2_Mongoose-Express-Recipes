const { Schema } = require ('mongoose')

const Recipe = new Schema (
    {
        Servings: { type: Number, required: true},
        prepTimeMins: { type: Number, required: true},
        cookTime: { type: Number, required: true},
        totalTime: { type: Number, required: true},
        yield: { type: String, required: true},
        cuisine: {type: Schema.Types.ObjectId, ref: 'Cuisine', default: null},
        directions: {type: Schema.Types.ObjectId, ref: 'Direction', default:null},
        ingredients: {type: Schema.Types.ObjectId, ref: 'Ingredient', default:null},
    },

    { timestamps: true }
)

module.exports = Recipe