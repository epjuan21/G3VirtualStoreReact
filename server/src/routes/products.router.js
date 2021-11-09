const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.getProducts)             // Return All Products
router.post('/', productsController.addProduct)             // Add New Product
router.get('/:id', productsController.getProductById)       // Get Product By Id
router.delete('/:id', productsController.deleteProduct)     // Delete Product
router.put('/:id', productsController.updateProduct)        // Update Product

module.exports = router;