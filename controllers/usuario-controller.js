'use strict'

const repository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();
const md5 = require('md5');

function usuarioController() {
    
}

usuarioController.prototype.post = async (req, res) => { 
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isRequired(req.body.email, 'Informe seu email');
    _validationContract.isEmail(req.body.email, 'O email informado é inválido');
    _validationContract.isRequired(req.body.senha, 'A senha informada é inválida');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação é obrigatória');
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'A senha e a confirmação não são iguais');

    let usuario = await _repo.emailExiste(req.body.email);
    if(usuario) {
        _validationContract.isTrue((usuario.nome != undefined), `Já existe o email ${req.body.email} cadastrado em nossa base`);
    }

    // Criptografa a senha do usuário
    req.body.senha = md5(req.body.senha);

    ctrlBase.post(_repo, _validationContract, req, res);
};

usuarioController.prototype.put = async (req, res) => { 
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isRequired(req.body.email, 'Informe seu email');
    _validationContract.isEmail(req.body.email, 'O email informado é inválido');
    _validationContract.isRequired(req.params.id, "Informe o id do usuario que será editado")
   
    let usuario = await _repo.emailExiste(req.body.email);
    if(usuario) {
        _validationContract.isTrue(
            (usuario.nome != undefined) && 
            (usuario._id != req.params.id), `Já existe o email ${req.body.email} cadastrado em nossa base`);
    }

    ctrlBase.put(_repo, _validationContract, req, res);
};

usuarioController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

usuarioController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

usuarioController.prototype.delete = async (req, res) => { 
    ctrlBase.delete(_repo, req, res);
};

module.exports = usuarioController;
