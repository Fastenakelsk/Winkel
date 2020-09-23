const {GebruikerRepository} = require('../repositories/index');

class GebruikerService {

    async getAllGebruikers() {
        console.log('At service');
        return await GebruikerRepository.readAll();
    }
}

module.exports = GebruikerService;
