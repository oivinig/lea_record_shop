const Disco = require("../model/catalogo.model.js");

module.exports = app => {
    const discos = require("../controllers/catalogo.controllers.js");
    let router = require("express").Router();
    // criar novos discos
    router.post("/", discos.create);
    // buscar todos os discos do catálogo
    router.get("/", discos.buscarDiscos);
    // deletar discos do catálogo
    router.delete("/", discos.remove);
    //buscar com filtros
    router.get("/estilo", discos.buscarPorEstilo);
    router.get("/artista", discos.buscarPorArtista);
    router.get("/anoLancamento", discos.buscarPorAnoLancamento);
    router.get("/titulo", discos.buscarPorTitulo);
    app.use("/api/discos", router);
}