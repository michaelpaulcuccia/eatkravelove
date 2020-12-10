const mongoose = require('mongoose');

const SandwichesSoupsSaladsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String
});

module.exports = SandwichesSoupsSalads = mongoose.model('sandwichessoupssalad', SandwichesSoupsSaladsSchema);