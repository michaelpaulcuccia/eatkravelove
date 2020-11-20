const express = require('express');
const router = express.Router();
const User = require('../../models/User');

//ROUTE: /admin/users
//DESCRIPTION: Gets ALL users from DB for Admin Grid
router.get('/', async (req, res) => {

    //pass an empty object as arg to get ALL docs in collection
    const data = await User.find({});

    try {

        //Set Response Headers
        res.setHeader('Content-Type', 'application/json');
        //CONTENT-RANGE MUST BE INCLUDED! 
        res.setHeader('Content-Range', `users 0-20/${data.length}`);

        //all IDs in 'data' are "._id" and must be converted to 'id'

        //create an empty array
        let dataArr = [];

        data.forEach(item => {

            //create an empty object
            let newObj = {}

            //set id instead of ._id
            newObj.id = item._id
            //set remaining fields as is 
            newObj.name = item.name
            newObj.email = item.email
            newObj.password = item.password

            //add to new data object to array
            dataArr.push(newObj);
        });

        res.send(dataArr);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;