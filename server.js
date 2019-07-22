const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let pessoas = [];


// CRUD

app.get('/', (req, res) => {
    res.status(200).send(pessoas);
});

app.post('/', (requisicao, resposta) => {
    pessoas.push(requisicao.body)
    resposta.status(201).send(requisicao.body);
});

app.put('/:id', (req, res) => {

    let pessoaEncontrada = pessoas.filter(pes => {return pes.id = req.params.id});
    pessoaEncontrada = req.body;

    res.status(202).send(pessoaEncontrada);
});

app.delete('/:id', (req, res) => {

    for(let i = 0; i< pessoas.length; i++){
        const pessoa = pessoas[i];
        if(pessoa.id == req.params.id) {
            pessoas.splice(i, 1);
        }
    }

    res.status(204).send();
});

//400 - Bad Request

app.listen(3000, () => {
    console.log('Servidor API NoFood iniciado na porta 3000.');
});
