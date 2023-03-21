const express = require('express');
const router = express.Router();

/* Controller modules */
const phrase_controller = require('../controllers/phraseController');
const phrase = require('../models/phrase');

/* Routes */
router.get('/', phrase_controller.index);
router.get('/phrases', phrase_controller.phrase_list);

module.exports = router;
