const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);

router.post('/', productsController.postProducts);

router.get('/get/:_id', productsController.getProduct);

router.delete('/delete/:_id', productsController.deleteProduct)

router.put('/' ,productsController.putProduct)

module.exports = router;