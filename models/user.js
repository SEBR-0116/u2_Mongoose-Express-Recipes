const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const User = new Schema(
    {
        userName: { type: String, required: true },
        email: { type: String, required: true },
        password:{type: String, required:true},
        savedRecipes: [{type: Schema.Types.ObjectId, ref: 'recipe_id'}]
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', User)
