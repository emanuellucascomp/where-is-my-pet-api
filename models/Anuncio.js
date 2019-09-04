var mongoose = require('mongoose');

var AnuncioSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Anuncio = module.exports = mongoose.model('anuncio', AnuncioSchema);
module.exports.get = function (callback, limit) {
    Anuncio.find(callback).limit(limit);
}