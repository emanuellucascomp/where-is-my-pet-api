Anuncio = require('../models/Anuncio');

exports.index = function (req, res) {
    Anuncio.get(function (err, anuncios) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Anúncios recuperados com sucesso",
            data: anuncios
        });
    });
};