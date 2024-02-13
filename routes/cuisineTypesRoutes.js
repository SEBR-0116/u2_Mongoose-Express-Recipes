const express = require('express');
const router = express.Router();
const cuisineTypesController = require('../controllers/cuisineTypesController');

router.get('/', cuisineTypesController.index);
router.get('/:id', cuisineTypesController.show);
// Add other CRUD routes (create, update, delete)

module.exports = router;
