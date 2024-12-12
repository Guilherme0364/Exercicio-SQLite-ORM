'use strict';

const isCpfValid = require('../../helpers/validaCpf')

const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pessoa extends Model {
		static associate(models) {
			Pessoa.hasMany(models.Curso, {
				foreignKey: 'docente_id'
			});
			Pessoa.hasMany(models.Matricula, {
				foreignKey: 'estudante_id',
				scope: { status: 'matriculado' },
				/* Esse alias serve para criar o metodo getAulasMatriculadas na rota http://localhost:3000/pessoas/:id/matriculas
				automaticamente, por isso o método não foi criado no PessoaService.js. Se tirarmos o scope, ele trará todas as matriculas*/
				as: 'aulasMatriculadas'
			});
		}
	}
	Pessoa.init({
		nome: {
			type: DataTypes.STRING,
			validate: { // Validação de nome para que o length seja entre 3 e 30 caractéres
				len: { 
					args: [3, 30],
					msg: 'O nome campo deve ter no mínimo 3 caracteres e no máximo 30 caracteres'
				}
			}
		},
		email: {
			type: DataTypes.STRING,
			validate: { // Validação de email para ver se é de fato um email inserido no post
				isEmail: {
					args: true,
					msg: 'Formato do e-mail inválido'
				}
			}
		},
		cpf: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				cpfEhValido: (cpf) => {
					if(!isCpfValid(cpf)) throw new Error("Número de CPF inválido")
				},			
			}
		},
		ativo: DataTypes.BOOLEAN,
		role: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Pessoa',
		tableName: 'pessoas',
		paranoid: true,
		defaultScope: { // Escopo padrão, ou seja, em função de get iremos considerar...
			where: { // Somente registros onde o ativo é true
				ativo: true
			}
		},		
		scopes: {
			todosOsRegistros:{
				where: {} // Interpreta como o 'where' do SQL como vazio, sendo assim ele irá considerar tudo
			}
		}
	});
	return Pessoa;
};
