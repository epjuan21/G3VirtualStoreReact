const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.getProducts)             // Return All Products
router.get('/:id', productsController.getProductById)       // Get Product By Id
router.post('/', productsController.addProduct)             // Add Product
router.put('/:id', productsController.updateProduct)        // Update Product
router.delete('/:id', productsController.deleteProduct)     // Delete Product

module.exports = router;