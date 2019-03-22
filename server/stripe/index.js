const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_CHECKOUT_SECRET_KEY);

router.post('/charge', (req, res) => {
  const { amount, currency, stripeToken, name, quantity } = req.body;
  stripe.charges.create(
    {
      amount: amount * 100,
      currency,
      source: stripeToken,
      description: 'Testing charges'
    },
    (error, charge) => {
      try {
        res.json({
          message: `You successfully bought ${quantity} units of ${name}!`
        });
        res.redirect('/success');
      } catch (err) {
        throw new Error(error.message);
      }
    }
  );
});

module.exports = router;
