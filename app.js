const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const homePage = require('./routes/index')
const signinPage = require('./routes/signin')
const loginPage = require('./routes/login')
const path = require('path')
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(ejsLayouts)
app.set('layout', './layouts/layout')
app.set('view engine', 'ejs')

app.use('/', homePage);
app.use('/signin', signinPage);
app.use('/login', loginPage);
//the last middleware should be 404 page
app.use((req, res)=>{
    res.status(404).render('404')
})



module.exports = app;