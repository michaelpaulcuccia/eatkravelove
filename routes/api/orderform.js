const express = require('express');
const router = express.Router();
const auth = require('../../auth/auth');
const OrderForm = require('../../models/OrderForm');

//ROUTE: api/orderform
router.post('/', auth, async (req, res) => {

    //deconstruct request
    const { name,
        phone,
        email,
        address,
        deliveryaddress,
        numberofguests,
        deliverydateandtime,
        options,
        dietaryrestrictions,
        allergies
    } = req.body;

    //id from user collection
    let user = req.user.id;

    //build order object
    const orderObj = {
        user: user,
        name: name,
        phone: phone,
        email: email,
        address: address,
        deliveryaddress: deliveryaddress,
        numberofguests: numberofguests,
        deliverydateandtime: deliverydateandtime,
        options: options,
        dietaryrestrictions: dietaryrestrictions,
        allergies: allergies
    };

    //create instance of orderForm class with orderObj
    order = new OrderForm(orderObj);

    try {
        //save to DB
        await order.save();

        res.json(order)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }



})

module.exports = router;

/*
{
        "name": "test",
        "phone": "555-555-5555",
        "email": "test@mail.com",
        "address": "100 Main Street",
        "deliveryaddress": "100 Main Street",
        "numberofguests": "5",
        "deliverydateandtime": "2020-11-12T15:37",
        "options": "",
        "dietaryrestrictions": "",
        "allergies": ""
}
*/