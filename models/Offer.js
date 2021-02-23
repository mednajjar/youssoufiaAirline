const Sequelize = require('sequelize')

const sequelize = require('../connection/database')

const Offer = sequelize.define('offers', {
    ofId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    departure: {
        type: Sequelize.STRING
    },
    arrival : {
        type: Sequelize.STRING
    },
    price:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dhour : {
        type: Sequelize.STRING
    },
    ahour : {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    }

})
// Offer.sync()
// .then(result=>{
//     console.log(result)
    
// })
// .catch(err=>{
//     console.log(err)
// })
module.exports = Offer;