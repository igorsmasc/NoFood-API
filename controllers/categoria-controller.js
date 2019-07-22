'use strict'

function categoriaController() {

}

categoriaController.prototype.get = async (req, res) => { 
    res.status(200).send('Funcionando...');
};

categoriaController.prototype.put = async (req, res) => { };

categoriaController.prototype.post = async (req, res) => { };

categoriaController.prototype.getById = async (req, res) => { 
    res.status(200).send(`O Id passado foi ${req.params.id}`);
};

categoriaController.prototype.delete = async (req, res) => { };

module.exports = categoriaController;