const db=require("../db");
const Review=require("../models/review")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main= async () =>{
    const reviews=[
        {
            recipe: "65ca494b256c38494a22d33c",
            user: '65ca4afa678eded2d5f97a78',
            rating: 5,
            comment: "My favorite way to start my morning every day! Very tasty!"
        },
        {
            recipe: "65ca494b256c38494a22d33d",
            user: "65ca4afa678eded2d5f97a79",
            rating: 4,
            comment: "Very good, but could use less oil than suggested."
        },
        {
            recipe: "65ca494b256c38494a22d33e",
            user: "65ca4afa678eded2d5f97a7a",
            rating: 3,
            comment: "A little bit basic, would recommend adding other toppings, such as sour cream, guacamole, etc."
        }

    ]

    await Review.insertMany(reviews)
    console.log('Created Reviews!')
}

const run = async () => {
    await main();
    db.close();
  };

  run();
