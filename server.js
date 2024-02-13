const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');
const PORT = process.env.PORT ||3001
const cuisineTypesController = require('./controllers/cuisineTypesController')

const app = express();

app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, ()=> console.log('connected!'))

app.get('/', (req, res) => res.send ('welcome to our page'))

app.get('/plants', cuisineTypesController.getAllControllers)
