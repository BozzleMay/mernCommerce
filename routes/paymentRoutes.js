const { Router } = require('express');
const paymentController = require('../controllers/paymentController');

const router = Router();

router.post('/payments', paymentController.payments_post);



module.exports = router;