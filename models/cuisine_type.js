const { urlencoded } = require('express')
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Cuisine = new Schema(
    {
        cuisine_name: { type: String, required: true },
        cuisine_type: { type: String, required: true },
        spicy: { type: Boolean, required: true},
        prep_time: { type: String, required: true },
        cook_time: { type: String, required: true },
        total_time: { type: String, required: true },
        servings: { type: Number, required: true },
        image_path: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('Cuisine', Cuisine)