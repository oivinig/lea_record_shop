const sql = require("../db/db.js");

// constructor
const Pedido = function(pedido) {
    this.cpfCliente = pedido.cpfCliente;
    this.idDiscos = pedido.idDiscos;
    this.quantidadeProdutos = pedido.quantidadeProdutos;

}

Pedido.create = (novoPedido, result) => {
    sql.query("INSERT INTO tbl_pedidos SET ?", novoPedido,
        (err, res) => {
            if (err) {
                console.log("Erro: ", err);
                result(err, null);
                return;
            }
            console.log("Pedido criado com sucesso.");
            result(null, res)
        });
};

Pedido.buscarPedidos = (result) => {
    let query = "SELECT * from tbl_pedidos";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err);
            return;
        }
        console.log("Pedidos: ", res);
        result(null, res)
    });
};

Pedido.buscarPedidosPorCpf = (cpfCliente, result) => {
    let query = `SELECT * FROM tbl_pedidos WHERE cpfCliente = ${cpfCliente.cpfCliente}`;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // Não encontrou nenhum pedido para o filtro informado
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    });
};

Pedido.buscarPedidosPorPeriodo = (periodo, result) => {
    let query = `SELECT * FROM tbl_pedidos WHERE date(dataHoraPedido) BETWEEN '${periodo.dataInicio}' AND '${periodo.dataFim}'`
    sql.query(query, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    })
}

module.exports = Pedido;