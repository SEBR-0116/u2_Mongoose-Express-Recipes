const express = require('express')
const db = require('./db')
const cousinTypeSchema = require('./models/cousintype')
const bodyParser = require('body-parser');
const logger = require('morgan');

const cousintypeControler = require('./controllers/cousintypeController')
const recipeControler = require('./controllers/recipeController')
const ingreadienceControler = require('./controllers/ingredientController')




// require() imports and middleware here ^ ///////
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'))
// app.use() middleware here ^ ///////////////////

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))



//app.get('/', (req, res) => res.send('This is our landing page!'))



////////Cousin Type
app.get('/cousintype',cousintypeControler.get_All_cousin_type)

app.get('/cousintype/:id',cousintypeControler.get_cousin_type_by_id)

app.post('/cousintype',cousintypeControler.create_Cousin_Type)

app.put('/cousintype/:id',cousintypeControler.update_Cousin_Type)

app.delete('/cousintype/:id',cousintypeControler.delete_cousinType)


////// Receipe

app.get('/recipes',recipeControler.get_all_recipe)

app.get('/recipes/:id',recipeControler.get_recipe_by_id)

app.get('/recipes/recipe/:name',recipeControler.get_recipe_by_name)

app.post('/recipes',recipeControler.create_recipe)

app.put('/recipes/:id',recipeControler.update_recipe)

app.delete('/recipes/:id',recipeControler.delete_recipe)


// Ingreadience

app.get('/ingreadience',ingreadienceControler.get_all_ingreadienc)

app.get('/ingreadience/:id',ingreadienceControler.get_ingreadience_id)

app.get('/ingreadience/name/:name',ingreadienceControler.get_ingreadients_name)

app.post('/ingreadience',ingreadienceControler.create_ingredient)

app.put('/ingreadience/:id',ingreadienceControler.update_ingreadient)

app.delete('/ingreadience/:id',ingreadienceControler.delete_ingreadient)