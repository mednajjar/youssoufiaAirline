
const session = require('express-session')
const Order = require('../models/Order')
const stripe = require('stripe')('sk_test_51IPq0nBnrf46QwruBqC1tYaSEBGy3vbYfIQwbvHzOKybktsafDR3W7oZvd01LgfiqL2KHpfR9A6oIvBRpqmAUJoz00Wkd3eiXn');

exports.orderPage = (req, res, next)=>{
    res.render('order')
}

exports.postOrder = async (req, res, next)=>{
    

    const token = req.body.stripeToken;
    

    const createOrder = await Order.create({
        ofId: req.session.offerID,
        regId: req.session.userId,
        totalPrice: req.session.totalPrice,
        passengersNum: req.session.passNumber,

    })
    if(createOrder){
        const myOrder = await Order.findAll({
            limit:1,
            order: [ [ 'orId', 'DESC' ]]
        })
        if(myOrder){
            const charge = stripe.charges.create({
                amount: req.session.totalPrice * 100,
                currency: 'MAD',
                description: 'Fly Ticket',
                source: token,
                metadata: {orId: myOrder.orId}
            })
            return res.render('order', {myOrder})
        }
    } 
    next()  
}

exports.updatePassengers = (req, res, next)=>{
    
}