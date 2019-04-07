const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_CHECKOUT_SECRET_KEY);

router.post('/charge', async (req, res) => {
  try {
    const { stripeToken, currency, quantity } = JSON.parse(req.body);
    const status = await stripe.charges.create({
      amount: quantity ? quantity * 99 : 999,
      currency,
      description: quantity
        ? `Purchased ${quantity} credits`
        : 'Purchased 1 Month Unlimited Plan!',
      source: stripeToken
    });
    res.json({ status });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
