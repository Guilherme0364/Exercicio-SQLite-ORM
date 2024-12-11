// Aqui basicamente vai ter operações de CRUD relacionadas com a controller porém de forma global

class Controller{
    constructor(entidadeService){ // Faz a comunicação com os Services
        this.entidadeService = entidadeService
    }

    async pegaTodos(req, res){
        try{
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistros)
        } catch(err){
            // erro
        }
    }
}

module.exports = Controller;