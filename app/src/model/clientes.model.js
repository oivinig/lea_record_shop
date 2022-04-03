const sql = require("../db/db.js");

// constructor
const Cliente = function(cliente) {
    this.cpfCliente = cliente.cpfCliente;
    this.nomeCompletoCliente = cliente.nomeCompletoCliente;
    this.dataNascimentoCliente = cliente.dataNascimentoCliente;
    this.emailCliente = cliente.emailCliente;
    this.telefoneCliente = cliente.telefoneCliente;
    this.clienteAtivo = true;
};

Cliente.create = (novoCliente, result) => {
    sql.query("INSERT INTO tbl_clientes SET ?", novoCliente, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }
        console.log("Cliente criado com sucesso.");
        result(null, res)
    });
};

Cliente.buscarClientes = (result) => {
    let query = "SELECT * FROM tbl_clientes";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err);
            return;
        }
        console.log("Clientes: ", res);
        result(null, res)
    });
};

Cliente.buscaPorCpf = (cpfCliente, result) => {
    sql.query(`SELECT * FROM tbl_clientes WHERE cpfCliente = ${cpfCliente}`, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Cliente encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }
        // CPF não encontrado
        result({ kind: "not_found" }, null);
    });
};

Cliente.updateStatusCliente = (cpfCliente, clienteAtivo, result) => {
    let query = `UPDATE tbl_clientes SET clienteAtivo = ${clienteAtivo} WHERE cpfCliente = ${cpfCliente}`
    sql.query(query, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err)
            return;
        }
        if (res.affectedRows == 0) {
            // Não encontrou Cliente por esse CPF
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("Status atualizado", { cpfCliente: cpfCliente });
        result(null, res);
    });
};

module.exports = Cliente;