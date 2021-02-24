const User = require('../models/Register')
const bcrypt = require('bcryptjs');
const session = require('express-session');

exports.loginPage = (req, res) => {
    res.render('login')
}

exports.postLogin = async (req, res, next) => {
    try {
        const ifUserExist = await User.findOne({
            where: {
                email: req.body.email,
            }
        })
        if (!ifUserExist) {
            console.log('email or password doesn\'t match')
           return res.redirect('login');
        }
        const match = await bcrypt.compare(req.body.password, ifUserExist.password)
        if(!match) return console.log('pass doesn\'t crypted');

        if (match && ifUserExist){
            req.session.userId = ifUserExist.regId;
             return res.redirect('/checkout');
        } 
        
    } catch (err) {
        return res.render(err)
    }




}