const express = require('express');
const session = require('express-session');
const connectDB = require('./config/db');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('config');
const seshConfig = config.get('mongoURI');

const app = express();

const TWO_HOURS = 1000 * 60 * 60 * 2;

//destructure process.env
const {
    PORT = 5000,
    SESSION_LIFETIME = TWO_HOURS,
    SESSION_SECRET = 'eatkravelove2020',
    SESSION_NAME = 'sessionid'
} = process.env;

//connect database
connectDB();

//mongoDB_session
const store = new MongoDBStore({
    uri: seshConfig,
    collection: 'session'
});

//Catch store errors
store.on('error', function (error) {
    console.log(error);
});

//Middleware 1 - get data from req.body in routes
app.use(express.json({ extended: false }));

//Middleware 2 - express-session
app.use(session({
    name: SESSION_NAME,
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

//routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/logout', require('./routes/api/logout'));

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});