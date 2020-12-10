const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//connect database
connectDB();

//Middleware - get data from req.body in routes
app.use(express.json({ extended: false }));

app.use(cors());

//routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/orderform', require('./routes/api/orderform'));
app.use('/api/indian', require('./routes/api/indian'));
app.use('/api/indochinese', require('./routes/api/indochinese'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});