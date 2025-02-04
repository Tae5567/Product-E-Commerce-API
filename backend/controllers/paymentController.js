import initializePayment from "../utils/paystack.js"

exports.initializePayment = async (req, res) => {
  try {
    const { email, amount } = req.body;
    const paymentUrl = await initializePayment(email, amount);
    res.json({ paymentUrl });
  } catch (error) {
    res.status(500).json({ error: 'Payment initialization failed' });
  }
};