const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Recipie = new Schema(
    {
        name: {type: String, required: true},
        cuisine: {type: String, required: true},
        indredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine'}],
        directions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Direction'}],
        cuisine: {type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine', required: false},
        prepTime: {type: String, required: true},
        cookTime: {type: String, required: true},
        //nutrition: [{name: {type: String, required: true}, amount:}]
    },
    {timestamps: true}
) 

module.exports = mongoose.model('recipies', Recipie)