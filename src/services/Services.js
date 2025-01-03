const dataSource = require('../database/models');

class Services { // Aqui vão basicamente todas as funções do Sequeliza, em combinação com as funções da Controller
	constructor(nomeDoModel) {
		this.model = nomeDoModel;
	}

	async pegaTodosOsRegistros(where = {}) {
		return dataSource[this.model].findAll({ where: { ...where } });
	}

	async pegaRegistrosPorEscopo(escopo) { // Pega o escopo definido no modelo, como por exemplo, o de pessoa
		return dataSource[this.model].scope(escopo).findAll()
	}

	async pegaUmRegistroPorId(id) {
		return dataSource[this.model].findByPk(id);
	}

	async pegaUmRegistro(where) {
		return dataSource[this.model].findOne({ where: { ...where } }); // recebe o objeto por parâmetro e vai espalhar o conteúdo dele aqui
	}

	async pegaEContaRegistros(where) {
		return dataSource[this.model].findAndCountAll({ where: { ...where } }); 
	}

	async criaRegistro(dadosDoRegistro) {
		return dataSource[this.model].create(dadosDoRegistro);
	}

	async atualizaRegistro(dadosAtualizados, ...where) {
		const listadeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, {
			where: { ...where }
		});
		if (listadeRegistrosAtualizados[0] === 0) {
			return false;
		}
		return true;
	}

	async excluiRegistro(id) {
		return dataSource[this.model].destroy({ where: { id: id } });
	}
}

module.exports = Services;
