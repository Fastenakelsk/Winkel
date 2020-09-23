const Gebruiker = require('../models/Gebruiker');
const BaseRepository = require('./BaseRepository');

class GebruikerRepository extends BaseRepository {
    constructor() {super(Gebruiker);}

    readAll() {
        return this.model.find({});
    }
}

module.exports = GebruikerRepository;