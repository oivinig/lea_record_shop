const mysql = require('mysql');
const dbconfig = require('../config/db.config.js');

// cria conexão com o banco de dados
const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});

// abre a conexão com o servidor mysql
connection.connect(error => {
    if (error) throw error;
    console.log('Conexão com o banco de dados estabelecida com sucesso.')
});

module.exports = connection;