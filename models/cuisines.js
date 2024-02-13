const {Schema} = require('mongoose')

const Cuisine = new Schema(
    {
        type: {type: String, required: true },
        description: {type: String, required: true},
        popular: {type: String, required: true}
    },


    { timestamps: true} 
)

module.exports = Cuisine