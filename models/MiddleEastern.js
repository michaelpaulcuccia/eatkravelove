const mongoose = require('mongoose');

const MiddleEasternSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String
});

module.exports = MiddleEastern = mongoose.model('middleeastern', MiddleEasternSchema);