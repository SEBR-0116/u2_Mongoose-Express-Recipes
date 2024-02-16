const { Schema, default: mongoose } = require('mongoose')

const directionSchema = new Schema(
  {
    step_no: { type: Number, required: true },
    instruction: { type: String, required: true },
    recipe_id:{type:Schema.Types.ObjectId,ref:'recipe_id'}
  },
  { timestamps: true }
)

module.exports = directionSchema

// const id = new mongoose.Types.Decimal128('3.1415');