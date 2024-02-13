const express = require('express');
const router = express.Router();
const directionsController = require('../controllers/directionsController');

router.get('/', directionsController.index);
router.get('/:id', directionsController.show);
// Add other CRUD routes (create, update, delete)

module.exports = router;
