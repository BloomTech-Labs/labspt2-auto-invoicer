const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_CHECKOUT_SECRET_KEY);

router.post('/charge', async (req, res) => {
  try {
    const { status } = await stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      description: 'Testing charges',
      source: req.body
    });
    res.json({ status });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
