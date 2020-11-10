const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');

//LOGIN
//ROUTE: api/login 
router.post('/', async (req, res) => {

    const { email, password } = req.body;

    try {

        //check for email and password
        if (!email || !password) {
            return res.status(401).json({ errors: [{ msg: 'Must provide email and password' }] });
        }

        //find user
        const user = await User.findOne({ email });

        //check for user
        if (!user) {
            return res.status(401).json({ errors: [{ msg: 'User does not exists' }] })
        }

        //make sure password matches - password is from req.body, user.password is encrypted password from db
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        //assign session an ID from the user ID
        req.session.userID = user._id

        res.send(`Hello ${user.name}, you are logged in!`)

        //REDIRECT TO HOME PAGE
        //return res.redirect('/home')

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }

});

module.exports = router;