const db = require('../db')
const Cuisine = require('../models/cuisine_type')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const cuisine = [
        { 
            cuisine_name: "Banana Bread",
            cuisine_type: "dessert",
            spicy: false,
            prep_time: "15mins",
            cook_time: "1hr",
            total_time: "1hr 15mins",
            servings: 12,
            image_path: "https://www.allrecipes.com/thmb/tlZcB1F8f5RmDEAEgmtnq66nNp4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/banana-banana-bread_articlebanana_banana-2000-79d74827e4ce4b28807e08f41d9bdf10.jpg"
        },
        { 
            cuisine_name: "Eggs Benedict",
            cuisine_type: "breakfast",
            spicy: false,
            prep_time: "15mins",
            cook_time: "15mins",
            total_time: "30mins",
            servings: 4,
            image_path: "https://www.allrecipes.com/thmb/GjvZcu4oM5yKG5nS7on-APeIwQ0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/17205-eggs-benedict-DDMFS-4x3-a0042d5ae1da485fac3f468654187db0.jpg"
        },
        { 
            cuisine_name: "Velveeta Spicy Sausage Dip",
            cuisine_type: "snack",
            spicy: true,
            prep_time: "5mins",
            cook_time: "5mins",
            total_time: "10mins",
            servings: 32,
            image_path: "https://www.allrecipes.com/thmb/T_eNo50lnsb0OnVfAkENTBRv7Lk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/241318-velveeta-spicy-sausage-dip-ddmfs-beauty-3x4-b29a4afdab3f4d54a8dd15157547c74c.jpg"
        }

    ]

    await Cuisine.insertMany(cuisine)
    console.log("Created cuisine")
}

const run = async () => {
    await main()
    db.close()
}

run()