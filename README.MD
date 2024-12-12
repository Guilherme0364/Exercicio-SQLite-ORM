Comando:	                                           Descrição:
sequelize db:migrate	                               Executa todas as migrações pendentes para atualizar o banco de dados
sequelize db:migrate:schema:timestamps:add	           Atualiza uma tabela de migração para ter marcação de data/hora
sequelize db:migrate:status	                           Exibe o status de todas as migrações
sequelize db:migrate:undo	                           Reverte a migração mais recente do banco de dados
sequelize db:migrate:undo:all	                       Reverte todas as migrações executadas
sequelize db:seed	                                   Executa um seeder específico
sequelize db:seed:undo	                               Deleta os últimos dados inseridos via seeds do banco de dados
sequelize db:seed:all	                               Executa todos os seeders
sequelize db:seed:undo:all	                           Deleta todos os dados inseridos via seeds do banco de dados
sequelize db:create	                                   Cria um banco com uma configuração específica
sequelize db:drop 	                                   Exclui o banco de dados especificado na configuração
sequelize init	                                       Inicia um projeto
sequelize init:config	                               Inicia as configurações
sequelize init:migrations	                           Inicia as migrações
sequelize init:models	                               Inicia os modelos
sequelize init:seeders	                               Inicia os seeders
sequelize migration:generate	                       Gera um novo arquivo de migração
sequelize model:generate	                           Gera uma model e sua migração [alias: model:create]
sequelize seed:generate	                               Gera um novo arquivo de seed

Temos as duas pontas das associações 1 para N: 

Equipe.hasMany(Atleta);
Atleta.belongsTo(Equipe);

Ou seja, uma equipe tem vários (hasMany) atletas, mas atletas pertencem a (belongsTo) somente uma equipe cada.

Fluxo de criação de novas funções na arquitetura MVC: 
    1°: Verifica como você vai utilizar o model nessa função, seja criando um relacionamento e definindo um mixin (função automática);
    2°: Cria a função na Classe Service global se fizer sentido para os outros modelos ou na específica se não, após isso implemente o método;
    3°: Depois de implementar o método no Service, faça o método na Controller específica de preferência com try e catch, pois é a controller que recebe a requisição:
    4°: Finalmente,crie a rota na route específica chamando o método da controller.
    