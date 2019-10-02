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
        connection: process.env.connection || 'mongodb+srv://igor123:123@cluster0-h24c5.mongodb.net/nofood?retryWrites=true:'
    },
    Security: {
        secretKey: 'd41d8cd98f00b204e9800998ec11d363fdc6df0d'
    }
}

module.exports = variables;


