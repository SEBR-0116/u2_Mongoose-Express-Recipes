const { Schema } = require ('mongoose')

const Recipe = new Schema (
    {
        Servings: { type: Number, required: true},
        prepTimeMins: { type: Number, required: true},
        cookTime: { type: Number, required: true},
        totalTime: { type: Number, required: true},
        yield: { type: String, required: true},
        cuisine: {type: Schema.Types.ObjectId, ref: 'Cuisine'},
    },

    { timestamps: true }
)

module.exports = Recipe