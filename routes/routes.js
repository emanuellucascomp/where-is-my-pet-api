const router = require('express').Router()

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Wheres my Pet API",
        version: "0.0.1"
    });
})

module.exports = router