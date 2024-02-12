const {Schema} = require('mongoose')

const Recipe = new Schema(
    {
        dish: {type: String, required: true},
        restrictions: {
            gluten_free: {type: Boolean, required: true},
            dairy_free: {type: Boolean, required: true},
            vegetarian: {type: Boolean, required: true},
            vegan: {type: Boolean, required: true}
        },
        cuisine: {type: Schema.Types.ObjectId, ref: 'Cuisine'},
        course: {type: String, required: false},
        description: {type: String, required: false},
        picture: {type: String, required: false},
        time_mins: {
            total: {type: Number, required: true},
            prep: {type: Number, required: false},
            cook: {type: Number, required: false},
            additional: {type: Number, required: false}
        },
        servings: {type: Number, required: true},
        nutrition: {
            calories: {type: Number, required: true},
            fat_g: {type: Number, required: true},
            carbs_g: {type: Number, required: true},
            protein_g: {type: Number, required: true}
        },
        ingredients: [{
            ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient'},
            quantity: {type: Number, required: false},
            unit: {type: String, required: false},
            notes: {type: String, required: false}
        }],
        directions: [{type: String, required: true}]
    },
    {timestamps: true}
)

module.exports = Recipe