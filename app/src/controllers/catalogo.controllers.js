const Disco = require("../model/catalogo.model.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio."
        });
    }
    // cria um novo objeto disco
    const disco = new Disco({
        tituloDisco: req.query.tituloDisco,
        artista: req.query.artista,
        anoLancamento: req.query.anoLancamento,
        estiloMusical: req.query.estiloMusical,
        quantidadeEstoque: req.query.quantidadeEstoque
    });

    Disco.create(disco, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao incluir o Disco. "
            });
        } else {
            res.send(data);
        }
    });
};

exports.buscarDiscos = (req, res) => {
    Disco.buscarDiscos((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao obter o Catálogo de Discos"
            });
        } else {
            res.send(data);
        }
    });
};

// remove discos do catálogo baseado no código da id do Disco (idDiscos)
exports.remove = (req, res) => {
    let idDiscos = req.query.idDiscos
    Disco.remove({ idDiscos: idDiscos }, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Não foi encontrado disco ${req.query.idDiscos}.`
                });
            } else {
                res.status(500).send({
                    message: `Não foi possível deletar o disco ${req.query.idDiscos}.`
                });
            }
        } else {
            res.send({
                message: `Disco ${req.query.idDiscos} deletado com sucesso.`
            });
        }
    });
};

exports.buscarPorEstilo = (req, res) => {
    const estilo = req.query.estilo;
    Disco.buscarPorEstilo({ estilo: estilo }, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Não foi encontrado Disco para o filtro ${estilo}.`
                });
            } else {
                res.status(500).send({
                    message: `Ocorreu um erro ao obter o Disco com o filtro ${estilo}.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.buscarPorArtista = (req, res) => {
    let artista = req.query.artista;
    Disco.buscarPorArtista({ artista: artista }, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Não foi encontrado Disco para o filtro ${artista}.`
                });
            } else {
                res.status(500).send({
                    message: `Ocorreu um erro ao obter o Disco com o filtro ${artista}.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.buscarPorTitulo = (req, res) => {
    let titulo = req.query.titulo;
    Disco.buscarPorTitulo({ titulo: titulo }, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Não foi encontrado disco para o filtro selecionado.` })
            } else {
                res.status(500).send({
                    message: `Ocorreu um erro.`
                });
            }
        } else {
            res.send(data);
        }
    });
}

exports.buscarPorAnoLancamento = (req, res) => {
    let anoLancamento = req.query.anoLancamento;
    Disco.buscarPorAnoLancamento({ anoLancamento: anoLancamento }, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({ message: `Não foi encontrado disco para o filtro selecionado.` })
            } else {
                res.status(500).send({
                    message: `Ocorreu um erro.`
                });
            }
        } else {
            res.send(data);
        }
    });
}