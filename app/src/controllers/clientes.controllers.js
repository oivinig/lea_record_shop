const Cliente = require("../model/clientes.model.js");

// criar e salvar um novo cliente
exports.create = (req, res) => {
    // valida requisição
    if (!req.body) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio."
        });
    };

    // criar novo objeto cliente
    const cliente = new Cliente({
        cpfCliente: req.query.cpfCliente,
        nomeCompletoCliente: req.query.nomeCompletoCliente,
        dataNascimentoCliente: req.query.dataNascimentoCliente,
        emailCliente: req.query.emailCliente,
        telefoneCliente: req.query.telefoneCliente
    });

    // salva o cliente na base de dados
    Cliente.create(cliente, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao incluir um Cliente."
            });
        } else {
            res.send(data);
        }
    });
};

// buscar todos os clientes da base
exports.buscarClientes = (req, res) => {
    Cliente.buscarClientes((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao obter os Clientes."
            })
        } else {
            res.send(data);
        }
    });
};

// buscar um único cliente por CPF
exports.buscaPorCpf = (req, res) => {
    Cliente.buscaPorCpf(req.params.cpfCliente, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Não foi encontrado Cliente com o CPF ${req.params.cpfCliente}.`
                });
            } else {
                res.status(500).send({
                    message: `Ocorreu um erro ao obter o Cliente com CPF ${req.params.cpfCliente}`
                });
            }
        } else {
            res.send(data);
        };
    });
};

// atualizar o status de um cliente (ativar/inativar)
exports.updateStatusCliente = (req, res) => {
    // validar a request
    if (!req.query) {
        res.status(400).send({
            message: "O conteúdo não pode estar vazio!"
        });
    };
    console.log(req.body);

    Cliente.updateStatusCliente(
        req.params.cpfCliente,
        req.body.clienteAtivo,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Não foi encontrado Cliente com o CPF ${req.params.cpfCliente}`
                    });
                } else {
                    res.status(500).send({
                        message: `Ocorreu um erro ao obter o Cliente com CPF ${req.params.cpfCliente}`
                    });
                }
            } else {
                res.send(data);
            }
        }
    );
};