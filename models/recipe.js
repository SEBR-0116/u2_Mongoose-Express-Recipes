const { Schema, default: mongoose } = require('mongoose')

const recipesSchema = new Schema(
  {
    name: { type: String, required: true },
    cousin_id:{type:Schema.Types.ObjectId,ref:'cousintype_id'},
    description: { type: String, required: true },
    type: { type: String, required: false},
    time_recipe: {
      prep_time: {type: Number,required: false},//prep_time: {type: mongoose.Decimal128,required: false},
      cook_time: {type: Number,required: false}
    },
    servings: { type: Number,required: false},
    images_recipe: {
      image_1: { type: String ,required: false},
      image_2: { type: String,required: false }
    },
    nutrition:{
      serving_size:{type: String,required: false},
      calories:{type: String,required: false},
      total_fat:{type: Number,required: false},
      cholestrol:{type: Number,required: false},
      Carbohydrate:{type: Number,required: false}
    },
    concerns:{
        vegan: {type: Boolean,required: true},
        gluten_free: {type: Boolean,required: true},
        kosher: {type: Boolean,required: true},
        halal: {type: Boolean,required: true}
    },
    ingredients:[{type: Schema.Types.ObjectId, ref:'ingredient_id'}],
    directions:[{
      instruction:{type:String,required:false}
    }]
  },
  { timestamps: true }
)

module.exports = recipesSchema

// const id = new mongoose.Types.Decimal128('3.1415');