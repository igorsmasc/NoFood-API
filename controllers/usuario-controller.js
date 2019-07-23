'use strict'

const repository = require('../repositories/usuario-repository');
const _repo = new repository();

function usuarioController() {

}

usuarioController.prototype.post = async (req, res) => { 
    let result = await _repo.create(req.body);
    res.status(201).send(result);
};

usuarioController.prototype.put = async (req, res) => { 
    let result = await _repo.update(req.params.id, req.body);
    res.status(202).send(result);
};

usuarioController.prototype.get = async (req, res) => {
    let list = await _repo.getAll();
    res.status(200).send(list);
};

usuarioController.prototype.getById = async (req, res) => {
    let usuario = await _repo.getById(req.params.id);
    res.status(200).send(usuario);
};

usuarioController.prototype.delete = async (req, res) => { 
    let deletado = await _repo.delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = usuarioController;
