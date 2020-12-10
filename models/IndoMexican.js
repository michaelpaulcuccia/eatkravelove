const mongoose = require('mongoose');

const IndoMexicanSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String
});

module.exports = IndoMexican = mongoose.model('indomexican', IndoMexicanSchema);