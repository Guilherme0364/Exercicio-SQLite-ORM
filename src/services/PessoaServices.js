const Services = require('./Services.js');

class PessoaServices extends Services {
	constructor() {
		super('Pessoa');
	}

	async pegaMatriculasAtivasPorEstudante(id) {
		const estudante = await super.pegaUmRegistroPorId(id);
		const listaMatriculas = await estudante.getAulasMatriculadas(); // Mixin
		return listaMatriculas;
	}

	async pegaTodasAsMatriculasPorEstudante(id) {
		const estudante = await super.pegaUmRegistroPorId(id);
		const listaMatriculas = await estudante.getTodasAsMatriculas(); // Mixin
		return listaMatriculas;
	}

	async pegaPessoaEscopoTodos() { //Implementa o método da classe pai 'pegaRegistrosPorEscopo' porém passando o escopo definido no modelo
		const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
		return listaPessoas;
	}
}

module.exports = PessoaServices;
