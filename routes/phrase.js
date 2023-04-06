import express from 'express';
const router = express.Router();

/* Controller modules */
import phraseController from '../controllers/phraseController.js';

/* Routes */
router.get('/', phraseController.index);
router.get('/phrases', phraseController.phrase_list);

export default router;
