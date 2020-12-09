const mongoose = require('mongoose');

const IndianSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String
});

module.exports = Indian = mongoose.model('indian', IndianSchema);