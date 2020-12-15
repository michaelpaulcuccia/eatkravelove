const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
//const config = require('config');
const jwt = require('jsonwebtoken');

//REGISTE A NEW USER
//ROUTE: api/register
router.post('/', async (req, res) => {

    //destructure request
    const { name, email, password } = req.body;

    try {

        //check for email and password
        if (!name || !email || !password) {
            return res.status(401).json({ errors: [{ msg: 'Must provide name, email, and password' }] });
        }

        //check for user
        let user = await User.findOne({ email });

        //See if User Exists
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

        //encrypt password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        //create an instance of a User - NOTE: doesn't create until calling .save()
        user = new User({
            name,
            email,
            password: hashedPassword
        });

        //save to database
        await user.save();

        //create payload with user._id generated in MongoDB
        //mongoose doesn't require ._id
        const payload = {
            user: {
                id: user.id
            }
        }

        //Return jsonwebtoken
        jwt.sign(payload, keys.jwtSecret, { expiresIn: 36000 }, (err, token) => {
            if (err) {
                throw err
            } else {
                //send token to client in res
                res.json({ token });
            }
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;