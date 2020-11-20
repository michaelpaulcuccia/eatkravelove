module.exports = function (req, res, next) {

    //check object details
    console.log(req.body)

    //deconstruct req
    const { email } = req.body;

    console.log(email)

    if (email === 'ekl_admin@mail.com') {
        console.log('correct email')
        req.body.admin = 'admin_001';
    } else {
        console.log('wrong email')
    }

    next()

}