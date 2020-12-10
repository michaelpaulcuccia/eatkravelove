const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//connect database
connectDB();

//Middleware - get data from req.body in routes
app.use(express.json({ extended: false }));

app.use(cors());

//user routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/orderform', require('./routes/api/orderform'));

//menu routes
app.use('/api/indian', require('./routes/api/indian'));
app.use('/api/indochinese', require('./routes/api/indochinese'));
app.use('/api/indoeuropean', require('./routes/api/indoeuropean'));
app.use('/api/indomexican', require('./routes/api/indomexican'));
app.use('/api/middleeastern', require('./routes/api/middleeastern'));
app.use('/api/sandwichessoupssalads', require('./routes/api/sandwichessoupssalads'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});