const Pedido = require("../model/pedidos.model.js");

// criar e salvar novo pedido
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio."
        });
    };

    // criar novo objeto pedido
    const pedido = new Pedido({
        cpfCliente: req.query.cpfCliente,
        idDiscos: req.query.idDiscos,
        quantidadeProdutos: req.query.quantidadeProdutos
    });


    //salva o pedido na base de dados
    Pedido.create(pedido, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao incluir um Pedido"
            });
        } else {
            res.send(data);
        }
    });
};

exports.buscarPedidos = (req, res) => {
    Pedido.buscarPedidos((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao buscar os pedidos."
            });
        } else {
            res.send(data);
        }
    });
};

exports.buscarPedidosPorCpf = (req, res) => {
    let cpfCliente = req.query.cpfCliente;

    Pedido.buscarPedidosPorCpf({ cpfCliente: cpfCliente }, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Não foram encontrados pedidos para o Cliente ${cpfCliente}`
                });
            } else {
                res.status(500).send({
                    message: `Ocorreu um erro ao obter os pedidos do cliente ${cpfCliente}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.buscarPedidosPorPeriodo = (req, res) => {
    let dataInicio = req.query.dataInicio;
    let dataFim = req.query.dataFim;

    Pedido.buscarPedidosPorPeriodo({ dataInicio: dataInicio, dataFim: dataFim }, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Não foram encontrados pedidos para o período informado.`
                });
            } else {
                res.status(500).send({
                    message: `Ocorreu um erro ao obter os pedidos do período informado.`
                });
            }
        } else {
            res.send(data);
        }
    });

}