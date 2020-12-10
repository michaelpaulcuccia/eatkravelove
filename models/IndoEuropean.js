const mongoose = require('mongoose');

const IndoEuropeanSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String
});

module.exports = IndoEuropean = mongoose.model('indoeuropean', IndoEuropeanSchema);