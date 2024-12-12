'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Verifica se a tabela existe antes de deletá-la
    const tableExists = await queryInterface.sequelize.query(
      `SELECT name FROM sqlite_master WHERE type='table' AND name='pessoas_backup';`
    );

    if (tableExists[0].length > 0) {
      // Se a tabela pessoas_backup existir, deletá-la
      await queryInterface.dropTable('pessoas_backup');
      console.log('Tabela pessoas_backup foi deletada.');
    } else {
      console.log('Tabela pessoas_backup não existe.');
    }
  },

  async down(queryInterface, Sequelize) {
    // Não há necessidade de recriar o backup na migração reversa
    console.log('Nenhuma ação reversa definida para a tabela pessoas_backup.');
  }
};
