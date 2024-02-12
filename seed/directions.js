const db = require('../db')
const { Direction } = require('../models')

db.on('error', console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const directions = [
        //  VENEZUELAN: AREPAS  
        {
            step: 1,
            description: "In a mixing bowl, combine the pre-cooked cornmeal (Harina P.A.N.) and salt.",
            time_estimate: 5 // Example: 5 minutes
        },
        {
            step: 2,
            description: "Gradually add water to the mixture, stirring until a soft dough forms.",
            time_estimate: 3 // Example: 3 minutes
        },
        {
            step: 3,
            description: "Knead the dough for a few minutes until smooth and elastic.",
            time_estimate: 5 // Example: 5 minutes
        },
        {
            step: 4,
            description: "Divide the dough into equal portions and shape each portion into a flat disc, about 1/2 inch thick.",
            time_estimate: 10 // Example: 10 minutes
        },
        {
            step: 5,
            description: "Heat a non-stick skillet or griddle over medium heat. Cook the arepas for about 5 minutes on each side, or until golden brown and cooked through.",
            time_estimate: 15 // Example: 15 minutes
        },
        {
            step: 6,
            description: "Slice each arepa open horizontally and fill with your favorite toppings, such as cheese, avocado, black beans, or shredded beef.",
            time_estimate: 0 // No specific time estimate
        },

        //Venezuelan Patacon

        {
            step: 1,
            description: "Peel the green plantains and cut them into thick slices.",
            time_estimate: 10 // Example: 10 minutes
        },
        {
            step: 2,
            description: "Heat the vegetable oil in a frying pan over medium-high heat.",
            time_estimate: 5 // Example: 5 minutes
        },
        {
            step: 3,
            description: "Fry the plantain slices until golden brown and crispy on both sides. Remove from the oil and drain on paper towels.",
            time_estimate: 15 // Example: 15 minutes
        },
        {
            step: 4,
            description: "Using a flat-bottomed object (like a plate or a glass), flatten each fried plantain slice into a disc.",
            time_estimate: 5 // Example: 5 minutes
        },
        {
            step: 5,
            description: "Return the flattened plantains to the hot oil and fry again until crispy. Remove from the oil and drain on paper towels.",
            time_estimate: 10 // Example: 10 minutes
        },
        {
            step: 6,
            description: "Sprinkle the fried plantains with salt and serve hot, optionally topped with guacamole.",
            time_estimate: 0 // No specific time estimate
        },

        //Italian pizza

        {
            step: 1,
            description: "Preheat your oven to the highest temperature setting, typically around 500°F (260°C) or higher.",
            time_estimate: 10 // Example: 10 minutes
          },
          {
            step: 2,
            description: "Roll out the pizza dough on a floured surface to your desired thickness.",
            time_estimate: 5 // Example: 5 minutes
          },
          {
            step: 3,
            description: "Transfer the rolled-out dough to a pizza stone or baking sheet lined with parchment paper.",
            time_estimate: 3 // Example: 3 minutes
          },
          {
            step: 4,
            description: "Spread the pizza sauce evenly over the dough, leaving a small border around the edges.",
            time_estimate: 2 // Example: 2 minutes
          },
          {
            step: 5,
            description: "Sprinkle shredded mozzarella cheese over the sauce, covering the entire surface.",
            time_estimate: 2 // Example: 2 minutes
          },
          {
            step: 6,
            description: "Add your desired toppings, such as pepperoni, bell peppers, and mushrooms.",
            time_estimate: 0 // No specific time estimate
          },
          {
            step: 7,
            description: "Bake the pizza in the preheated oven for 10-12 minutes, or until the crust is golden brown and the cheese is bubbly and melted.",
            time_estimate: 12 // Example: 12 minutes
          },
          {
            step: 8,
            description: "Remove the pizza from the oven and let it cool for a few minutes before slicing and serving.",
            time_estimate: 5 // Example: 5 minutes
          }

    ]
    await Direction.insertMany(directions)
    console.log("Directions were inserted to database")
}

const run = async () => {
    await main()
    db.close()
}

run()