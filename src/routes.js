const express = require('express');
const router = express.Router();

const {
    GebruikerController,
} = require('./controllers/index');

// Gebruiker routes
router.get('/gebruikers', GebruikerController.getAllGebruikers);

module.exports = router;