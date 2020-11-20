module.exports = function (req, res, next) {

    //deconstruct req
    const { email } = req.body;

    if (email === 'ekl_admin@mail.com') {
        req.body.admin = 'admin_001';
    }

    next()

}