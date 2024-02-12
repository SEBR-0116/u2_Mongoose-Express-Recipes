const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cookingTime: { type: String, required: true },
    ImageUrl: { type: String, required: false },
    refCuisineType: {
      type: Schema.Types.ObjectId,
      ref: "cuisine_id",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipes", Recipe);
