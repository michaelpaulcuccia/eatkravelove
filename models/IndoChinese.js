const mongoose = require('mongoose');

const IndoChineseSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String
});

module.exports = IndoChinese = mongoose.model('indochinese', IndoChineseSchema);