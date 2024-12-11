const Services = require('./Services.js');

// Aqui vão métodos exclusivos da regra de negócio para o modelo pessoa
class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }
}

module.exports = PessoaServices;
