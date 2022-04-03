const Pedido = require("../model/pedidos.model.js");

module.exports = app => {
    const pedidos = require("../controllers/pedidos.controllers.js");
    let router = require("express").Router();
    // criar novo pedido
    router.post("/", pedidos.create);
    // obter todos os pedidos
    router.get("/", pedidos.buscarPedidos);
    // buscar pedidos por cliente
    router.get("/cpf", pedidos.buscarPedidosPorCpf);
    // buscar pedidos por período
    router.get("/periodo", pedidos.buscarPedidosPorPeriodo)
    app.use("/api/pedidos", router);
}