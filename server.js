const express = require('express');
const session = require('express-session');
const connectDB = require('./config/db');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('config');
const sesh = config.get('sessionURI');

const app = express();

const TWO_HOURS = 1000 * 60 * 60 * 2;

const {
    PORT = 5000,
    SESSION_LIFETIME = TWO_HOURS,
    SESSION_SECRET = 'eatkravelove2020'
} = process.env;

//connect database
connectDB();

//mongoDB_session
const store = new MongoDBStore({
    uri: sesh,
    collection: 'session'
});

// Catch errors
store.on('error', function (error) {
    console.log(error);
});

//*** MIDDLEWARE ****

//- get data from req.body in routes
app.use(express.json({ extended: false }));

//- express-session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: store,
    cookie: {
        secure: true,
        maxAge: SESSION_LIFETIME,
        sameSite: true
    }
}));

//*** MIDDLEWARE ****

//routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/login', require('./routes/api/login'));

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});