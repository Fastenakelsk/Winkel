const mongoose = require('mongoose');

const GebruikerSchema = mongoose.Schema({
    voornaam: {
        type: String,
        required: true
    },
    achternaam: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Gebruiker', GebruikerSchema);
