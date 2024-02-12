const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Ingredient = new Schema(
  {
    cost: { type: Number, required: true },
    items: { type: String, required: true },
    subsitituteItem: { type: String, required: true },
    refRecipes: {
      type: Schema.Types.ObjectId,
      ref: "recipe_id",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredients", Ingredient);
