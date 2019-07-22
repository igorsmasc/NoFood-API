'use strict'

function produtoController() {

}

produtoController.prototype.get = async (req, res) => { 
    res.status(200).send('Funcionando, os produtos serão listados aqui...');
};

produtoController.prototype.put = async (req, res) => { };

produtoController.prototype.post = async (req, res) => { };

produtoController.prototype.getById = async (req, res) => { 
    res.status(200).send(`O Id passado foi ${req.params.id}`);
};

produtoController.prototype.delete = async (req, res) => { };

module.exports = produtoController;