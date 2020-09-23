const {promiseResponseHelper} = require('../helpers');
const {GebruikerService} = require('../services/index');

module.exports = class GebruikerController {

    getAllGebruikers(req, res){
        promiseResponseHelper(req, res, GebruikerService.getAllGebruikers());
    }
}
