const router = require('express').Router()
const anuncioController = require('../controllers/anuncioController')

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Wheres my Pet API",
        version: "0.0.1"
    });
})

router.route('/anuncios')
        .get(anuncioController.index)

module.exports = router