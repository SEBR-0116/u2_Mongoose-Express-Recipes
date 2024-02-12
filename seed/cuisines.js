const db = require('../db')
const Cuisine = require('../models/cuisine')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisines = [
        {
            name: "Italian",
            description: "Italian cuisine: renowned for pasta, pizza, fresh ingredients, rich sauces, diverse flavors, and a love of regional specialties.",
            type: "Italian Cuisine",
        },
        {
            name: "Mexican",
            description: " Vibrant and flavorful, featuring tortillas, spicy chilies, fresh herbs, beans, and a rich blend of indigenous ingredients.",
            type: "Mexican Cuisine",
        },
        {
            name: "Chinese",
            description: "Diverse and savory, with stir-fries, noodles, dumplings, rice, aromatic sauces, and a balance of sweet, sour, and spicy flavors.",
            type: "Chinese Cuisine",
        }
    ]
    await Cuisine.insertMany(cuisines)
    console.log('Inserted cuisines!')
}

const run = async () => {
    await main()
    db.close()
}

run()