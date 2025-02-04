const router = require('express').Router();
const { initializePayment } = require('../controllers/paymentController');

router.post('/initialize', initializePayment);
module.exports = router;