const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        cuisineId: {type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine'},
    },
    {timestamps: true}
    )

module.exports = mongoose.model('Recipe', recipeSchema)