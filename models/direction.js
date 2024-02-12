const mongoose = require('mongoose');

const directionSchema = new mongoose.Schema(
    {
        steps: [{type: String, required: true}],
        recipeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'},
    }
);

module.exports = mongoose.model('Direction', directionSchema)