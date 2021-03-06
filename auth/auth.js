const jwt = require('jsonwebtoken');
//const config = require('config');
const keys = require('../productionKeys');

//middleware with access to req, res objects and next(callback)  
module.exports = function (req, res, next) {

    //get token from header
    const token = req.header('x-auth-token');

    //check if no token
    if (!token) {
        return res.status(401).json({ msg: 'no token, authorization denied' });
    }

    //verify token
    try {

        //decode token
        //dev
        //const decoded = jwt.verify(token, config.get('jwtSecret'));
        //prod
        const decoded = jwt.verify(token, keys.jwtSecret);

        //take request object and assign a value to user
        req.user = decoded.user;

        next();

    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }

}