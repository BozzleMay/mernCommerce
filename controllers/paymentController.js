const stripe = require('stripe')('sk_test_51Ilf0LBEuoBbbdoKIgJFl8tcQtyJ1zZRsOSypZCT8g1KCBy2GsxOLnmOineEMQf5TeQwQCtZGCzvDUBBxsoN88Rh00Q0GNCuDl');

module.exports.payments_post = async (req, res, next) => {
    // const {email, amount} = req.body
    
    // const shipping = req.body.shipping
    // const customer = req.body.customer
    // console.log(shipping)
const paymentIntent = await stripe.paymentIntents.create({
    
  amount: 70,
  currency: 'gbp',
  payment_method_types: ['card'],
//   "receipt_email": email,


 
 
  

});
res.json({clientSecret: paymentIntent.client_secret})
}