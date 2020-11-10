const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const session = require('express-session');

//REGISTE A NEW USER
//ROUTE: api/users/register
router.post('/register', async (req, res) => {

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

        //response with session data 
        res.status(201).send(`${user.name} added! Session: ${JSON.stringify(req.session)}`)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error');
    }

});

module.exports = router;