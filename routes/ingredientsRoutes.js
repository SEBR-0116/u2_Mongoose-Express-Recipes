const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');

router.get('/', ingredientsController.index);
router.get('/:id', ingredientsController.show);
// Add other CRUD routes (create, update, delete)

module.exports = router;
