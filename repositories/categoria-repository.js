const mongoose = require('mongoose');
require('../models/categoria-model');
const CategoriaModel = mongoose.model('Categoria');

class categoriaRepository {
    
    constructor() {

    }

    async create(data) {
        let categoria = new CategoriaModel(data);
        let resultado = await categoria.save();
        return resultado;
    }

    async update(id, data) {
        await CategoriaModel.findByIdAndUpdate(id, { $set: data });
        let result = await CategoriaModel.findById(id);
        return result;
    }

    async getAll() {
        return await CategoriaModel.find();
    }

    async getById(id) {
        return await CategoriaModel.findById(id);
    }

    async delete(id) {
        return await CategoriaModel.findByIdAndRemove(id);
    }

}

module.exports = categoriaRepository;
