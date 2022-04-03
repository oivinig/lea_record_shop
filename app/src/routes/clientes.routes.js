const Cliente = require("../model/clientes.model.js");

module.exports = app => {
    const clientes = require("../controllers/clientes.controllers.js");
    let router = require("express").Router();
    // criar novo Cliente
    router.post("/", clientes.create);
    // obter todos os clientes
    router.get("/", clientes.buscarClientes);
    // obter cliente por cpf
    router.get("/:cpfCliente", clientes.buscaPorCpf);
    // atualizar status do Cliente (ativo/inativo)
    router.post("/:cpfCliente", clientes.updateStatusCliente);
    app.use("/api/clientes", router);
}