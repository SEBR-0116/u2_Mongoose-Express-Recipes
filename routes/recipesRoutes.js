const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

router.get('/', recipesController.index);
router.get('/:id', recipesController.show);
// Add other CRUD routes (create, update, delete)

module.exports = router;
