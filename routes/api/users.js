const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const users = [];

//ROUTE: api/users
router.post('/', async (req, res) => {

    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = { name: req.body.name, password: hashedPassword };

        users.push(user);
        res.status(201).send(`${user.name} added!`)

    } catch (err) {
        console.error(err.message)
    }

});

//ROUTE: api/users/login
router.post('/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name);
    if (user === null) {
        return res.status(400).send('Cannot find user');
    }

    try {

        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Password matches!')
        } else {
            res.send('Passwords did NOT match')
        }

    } catch (err) {
        console.error(err.message)
    }
});

module.exports = router;