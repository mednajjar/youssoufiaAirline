const express = require('express');
const index = express.Router();
const {homePage} = require('../controllers/indexController')

index.get('/', homePage)


module.exports = index;