const database = require('../models') // Executa o codigo trazendo o codigo de models trazendo os metodos dos outros modelos
const Controller = require('./Controller')
const PessoasServices = require('../services/PessoaService')

const pessoasServices = new PessoasServices() // A instancia puxa todos os métodos da classe

class Pessoacontroller extends Controller{
    constructor(){
        super(pessoasServices)
    }
}

module.exports = Pessoacontroller;
