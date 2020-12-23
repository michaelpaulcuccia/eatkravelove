const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const keys = require('./productionKeys');
const path = require('path');

const app = express();

//connect database
const connectDB = async () => {
    try {
        await mongoose.connect(
            keys.mongoURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err.message);
        //exit process with failure
        process.exit(1);
    }
}
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

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});
