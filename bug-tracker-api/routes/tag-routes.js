const express = require('express');
const bugController = require('../controllers/bugController');

const router = express.Router();

router.post('/addTag', bugController.add_tag);

module.exports = router;
