const Services = require('./Services.js');

class PessoaServices extends Services {
	constructor() {
		super('Pessoa');
	}

	async pegaMatriculasPorEstudante(id) {
		const estudante = await super.pegaUmRegistroPorId(id);
		const listaMatriculas = await estudante.getAulasMatriculadas(); // Método criado automaticamente pelo mixin no model
		return listaMatriculas;
	}
}

module.exports = PessoaServices;