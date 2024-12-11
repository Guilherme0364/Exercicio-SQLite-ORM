'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Curso extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Curso.belongsTo(models.Categoria, { // Vários cursos podem ter uma categoria 
				foreignKey: 'categoria_id'
			})
			Curso.belongsTo(models.Pessoa, { // Vários cursos podem ter uma pessoa 
				foreignKey: 'docente_id'
			})
			Curso.hasMany(models.Matricula, {
				foreignKey: 'curso_id'
			})
		}
	}
	Curso.init({
		titulo: DataTypes.STRING,
		descricao: DataTypes.STRING,
		data_inicio: DataTypes.DATEONLY
	}, {
		sequelize,
		modelName: 'Curso',
		tableName: 'cursos'
	});
	return Curso;
};