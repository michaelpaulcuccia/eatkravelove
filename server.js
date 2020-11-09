const express = require('express');
const connectDB = require('./config/db');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.json())

//connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

//--- USER AUTHENTICATION TESTING ---//
//-------------------------------------

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, res) => {

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

app.post('/users/login', async (req, res) => {
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

//-------------------------------------
//--- USER AUTHENTICATION TESTING ---//

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});