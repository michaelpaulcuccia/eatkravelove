const express = require('express');
const router = express.Router();
const Indian = require('../../models/Indian');

//ADD A MEAL
//ROUTE: /api/indian
router.post('/', async (req, res) => {

    const { name, price, type } = req.body;

    const newMeal = new Indian({
        name: name,
        price: price,
        type: type
    })

    try {

        const add = newMeal.save()
        res.json('meal successfully added')

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }

})

module.exports = router;