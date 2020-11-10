const express = require('express');
const connectDB = require('./config/db');
const bcrypt = require('bcrypt');

const app = express();

//connect database
connectDB();

//Middleware - get data from req.body in routes
app.use(express.json({ extended: false }));

//Test Route
app.get('/', (req, res) => res.send('API Running'));

//routes
app.use('/api/users', require('./routes/api/users'));

//Initialize Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});