const express = require('express');
const router = express.Router();

/* Controller modules */
const phrase_controller = require('../controllers/phraseController');

/* Routes */
router.get('/', phrase_controller.index);

module.exports = router;
