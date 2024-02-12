const db=require("../db");
const User=require("../models/user")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main= async () =>{
    const users=[
        {
            userName: "Lane17027",
            email: "lanenichols17027@gmail.com",
            password: "!Shop2drop",
            savedRecipes: ['65ca494b256c38494a22d33d', '65ca494b256c38494a22d33c']

        },
        {
            userName: "LaniL",
            email: "lanilebaron@gmail.com",
            password: "L@ni",
            savedRecipes: ['65ca494b256c38494a22d33d','65ca494b256c38494a22d33e']

        },
        {
            userName: "philiproberts",
            email: "philiproberts@gmail.com",
            password: "philipe",
            savedRecipes: ['65ca494b256c38494a22d33c', '65ca494b256c38494a22d33d','65ca494b256c38494a22d33e']

        }

    ]

    await User.insertMany(users)
    console.log('Created Users!')
}

const run = async () => {
    await main();
    db.close();
  };

  run();
