const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products')

router.get('/', productsController.getProducts);
router.post('/', productsController.postProduct);

router.get('/:id', productsController.getProductById);

router.put('/', productsController.putProductById);

router.delete('/:id' , productsController.deleteProductById);


module.exports = router;
