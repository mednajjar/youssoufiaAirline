const Offer = require('../models/Offer')


exports.offersPage = (req, res, next)=>{ 
        res.render('offers')   
}

exports.postOffer = (req, res, next)=>{
        try{
                const offerId = req.body.offerId;
        console.log(offerId)
        req.session.offerID = offerId;
        const myOffer = Offer.findAll({
                where:{
                        ofId: offerId,
                }
        }) 
        .then(newOffer=>{
        req.session.userId && myOffer ? res.render('checkout', {newOffer})
        : res.render('login', {newOffer})
        }) 
        .catch(err=>console.log(err))              
        
        }catch(err){
                throw err
        }
        
               
      
}