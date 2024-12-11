// Intermédio entre controller e model, para regras de negócio mais específicas
const database = require('../models')

class Services{
    constructor(){
        
    }

    async pegaTodosOsRegistros(){
        return database[this.model].findAll();
    }
}

module.exports = Services;