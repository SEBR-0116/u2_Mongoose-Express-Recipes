const {Schema} = require('mongoose')

const Cuisine = new Schema(
    {
        cuisine: {type: String, required: true},
        description: {type: String, required: true},
        regional_varieties: [{type: String, required: false}],
        recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
    },
    {timestamps: true}
)

module.exports = Cuisine