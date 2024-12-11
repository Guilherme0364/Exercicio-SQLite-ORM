'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pessoa extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Pessoa.hasMany(models.Curso, {
				foreignKey: 'docente_id'
			})

			Pessoa.hasMany(models.Matricula, {
				foreignKey: 'estudante_id',
				scope: { status: 'matriculado' },
				/* Esse alias serve para criar o metodo getAulasMatriculadas na rota http://localhost:3000/pessoas/:id/matriculas
				automaticamente, por isso o método não foi criado no PessoaService.js. Se tirarmos o scope, ele trará todas as matriculas*/
				as: 'aulasMatriculadas'
			})
		}
	}
	Pessoa.init({
		nome: DataTypes.STRING,
		email: DataTypes.STRING,
		cpf: DataTypes.STRING,
		ativo: DataTypes.BOOLEAN,
		role: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Pessoa',
		paronoid: true
	});
	return Pessoa;
};