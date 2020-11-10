const express = require('express');
const router = express.Router();

//LOGOUT
//ROUTE: api/logout

router.post('/', async (req, res) => {
    req.session.destroy();
    res.clearCookie(SESSION_NAME);
});

module.exports = router;