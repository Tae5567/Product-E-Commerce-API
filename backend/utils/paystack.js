//Paystack API Integration

const axios = require('axios');

const initializePayment = async (email, amount) => {
  const response = await axios.post(
    'https://api.paystack.co/transaction/initialize',
    {
      email,
      amount: amount * 100, // Paystack uses kobo (amount in cents)
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data.data.authorization_url; // Redirect user to this URL
};

module.exports = { initializePayment };