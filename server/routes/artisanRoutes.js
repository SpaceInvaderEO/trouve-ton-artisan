const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');

router.get('/', artisanController.getArtisans);
router.get('/top', artisanController.getTopArtisans);
router.get('/search', artisanController.searchArtisans);
router.get('/categorie/:slug', artisanController.getArtisansByCategory);
router.get('/:id', artisanController.getArtisanById);
router.post('/contact', artisanController.submitContact);

module.exports = router;
