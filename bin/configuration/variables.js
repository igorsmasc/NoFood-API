const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://<username>:<password>@cluster0-h24c5.mongodb.net/test?retryWrites=true&w=majority'
    }
}

module.exports = variables;