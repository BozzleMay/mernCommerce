const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

router.get('/products', productController.products_get);
router.post('/products', productController.products_post);
router.delete('/products/:id', productController.products_delete);


module.exports = router;
