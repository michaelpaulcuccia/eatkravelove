const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

//ROUTE: api/users
router.post('/', async (req, res) => {

    //destructure request
    const { name, email, password } = req.body;

    try {

        //check for user
        let user = await User.findOne({ email });

        //See if User Exists
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        }

        //encrypt password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        //create an instance of a User - NOTE:  doesn't create until calling .save()
        user = new User({
            name,
            email,
            password: hashedPassword
        });

        //saves to database
        await user.save();

        res.status(201).send(`${user.name} added!`)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
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