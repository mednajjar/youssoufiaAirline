const express = require('express');
const cart = express.Router();
const {cartPage} = require('../controllers/cartController')

cart.get('/', cartPage)


module.exports = cart;