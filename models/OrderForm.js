const mongoose = require('mongoose');

const OrderFormSchema = new mongoose.Schema({
    //reference to User model
    //connects to id in User model (_id in mongoDB)
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    deliveryaddress: {
        type: String,
        required: true
    },
    numberofguests: {
        type: Number,
        required: true
    },
    deliverydateandtime: {
        type: String,
        required: true
    },
    options: {
        type: String,
    },
    dietaryrestrictions: {
        type: String
    },
    allergies: {
        type: String
    }
});

module.exports = OrderForm = mongoose.model('orderform', OrderFormSchema);