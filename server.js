const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello NoFood!');
});

app.listen(3000, () => {
    console.log('Servidor API NoFood iniciado na porta 3000.');
});