/*
 
 Classe Variables - (Classe principal removida por conter senha de conexão no mongoDB)
 Remova o "_examples" do nome da classe
 Adicione uma connection com o mongoDb e a o app funcionará

*/
const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv:'
    }
}

module.exports = variables;


