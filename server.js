'use strict'

const app = require('../NoFood-API/bin/express');
const variables = require('../NoFood-API/bin/configuration/variables');

app.listen(variables.Api.port, ()=>{
    console.info(`API inicializada com sucesso na porta ${variables.Api.port}`);
})
