const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Direction = new Schema(
  {
    steps: { type: String, required: true },
    description: { type: String, required: true },
    refRecipes: {
      type: Schema.Types.ObjectId,
      ref: "recipe_id",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Directions", Direction);
