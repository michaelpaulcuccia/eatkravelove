const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

//LOGIN
//ROUTE: api/login 
router.post('/', async (req, res) => {

    //destructure request
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

        //create payload with user._id generated in MongoDB
        //mongoose doesn't require ._id
        const payload = {
            user: {
                id: user.id
            }
        }

        //Return jsonwebtoken
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
            if (err) {
                throw err
            } else {
                //send token to client in res
                res.json({ token });
            }
        });

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }

});

module.exports = router;