const db = require('../db')
const {Ingredient} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async() => {

    const ingredients = [
        {
            ingredient: 'nuts',
            description: 'A nut is a fruit consisting of a hard or tough nutshell protecting a kernel which is usually edible. In general usage and in a culinary sense, a wide variety of dry seeds are called nuts, but in a botanical context "nut" implies that the shell does not open to release the seed (indehiscent).'
        },
        {
            ingredient: 'cinnamon',
            description: 'Cinnamon bark is used as a spice. It is principally employed in cookery as a condiment and flavouring material. It is used in the preparation of chocolate, especially in Mexico. Cinnamon is often used in savoury dishes of chicken and lamb. In the United States and Europe, cinnamon and sugar are often used to flavour cereals, bread-based dishes such as toast, and fruits, especially apples; a cinnamon and sugar mixture (cinnamon sugar) is sold separately for such purposes. It is also used in Portuguese and Turkish cuisine for both sweet and savoury dishes. Cinnamon can also be used in pickling, and in Christmas drinks such as eggnog. Cinnamon powder has long been an important spice in enhancing the flavour of Persian cuisine, used in a variety of thick soups, drinks and sweets.[39] It is also one of "four sibling spices" (rempah empat beradik) essential in Malay cuisine aside from clove, star anise and cardamom.'
        },
        {
            ingredient: 'phyllo dough',
            description: 'Filo or phyllo is a very thin unleavened dough used for making pastries such as baklava and börek in Middle Eastern and Balkan cuisines. Filo-based pastries are made by layering many sheets of filo brushed with oil or butter; the pastry is then baked.'
        },
        {
            ingredient: 'honey',
            description: 'Honey is a syrup composed of several simple sugars, primarily fructose and glucose. Over its history as a food the main uses of honey have lain in cooking, baking, confection, as a spread on bread, as an addition to various beverages such as tea, and as a sweetener in some commercial beverages.'
        }
    ]

    await Ingredient.insertMany(ingredients)
    console.log('inserted')
}

const run = async() => {
    await main()
    db.close()
}

run()