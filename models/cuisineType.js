const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Cuisine = new Schema(
  {
    type: { type: String, required: true },
    location: { type: String, required: true },
    specialDiet: { type: [Array], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cuisine", Cuisine);
