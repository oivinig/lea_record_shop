const sql = require("../db/db.js");

// constructor
const Disco = function(disco) {
    this.tituloDisco = disco.tituloDisco;
    this.artista = disco.artista;
    this.anoLancamento = disco.anoLancamento;
    this.estiloMusical = disco.estiloMusical;
    this.quantidadeEstoque = disco.quantidadeEstoque;
}

Disco.create = (novoDisco, result) => {
    sql.query("INSERT INTO tbl_catalogo_discos SET ?", novoDisco, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res)
    });
};

Disco.buscarDiscos = (result) => {
    let query = "SELECT * FROM tbl_catalogo_discos";
    sql.query(query, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res)
    });
};

Disco.buscarPorEstilo = (estilo, result) => {
    let query = `SELECT * FROM tbl_catalogo_discos WHERE estiloMusical like '%${estilo.estilo}%'`;

    sql.query(query, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res);
            return;
        }
        // Não encontrou resultado no filtro
        result({ kind: "not_found" }, null);
    });
};

Disco.buscarPorArtista = (artista, result) => {
    let query = `SELECT * FROM tbl_catalogo_discos WHERE artista like '%${artista.artista}%'`;

    sql.query(query, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res);
            return;
        }
        // Não encontrou resultado no filtro
        result({ kind: "not_found" }, null);
    });
};

Disco.buscarPorTitulo = (titulo, result) => {
    let query = `SELECT * FROM tbl_catalogo_discos WHERE tituloDisco like '%${titulo.titulo}%'`;

    sql.query(query, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res);
            return;
        }
        // Não encontrou resultado no filtro
        result({ kind: "not_found" }, null);
    });
};

Disco.buscarPorAnoLancamento = (anoLancamento, result) => {
    let query = `SELECT * FROM tbl_catalogo_discos WHERE anoLancamento like '%${anoLancamento.anoLancamento}%'`;

    sql.query(query, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res);
            return;
        }
        // Não encontrou resultado no filtro
        result({ kind: "not_found" }, null);
    });
};


Disco.remove = (idDiscos, result) => {
    sql.query(`DELETE FROM tbl_catalogo_discos WHERE idDiscos = ${idDiscos}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res)
    });
};

module.exports = Disco;