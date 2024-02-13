const { Schema } = require('mongoose')

const cousinTypeSchema = new Schema(
  {
    name: { type: String, required: true },
    dish: { type: String, required: true },
    category: { type: String, required: true },
    continent: { type: String},
    country_origin: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = cousinTypeSchema