const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');
const authJwt = require('../middlewares/authJwt');

router.get('/', authJwt.verifyToken, productsController.getProducts)                                                 // Return All Products
router.get('/:id', productsController.getProductById)                                           // Get Product By Id
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], productsController.addProduct)         // Add Product
router.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], productsController.updateProduct)    // Update Product
router.delete('/:id', [authJwt.verifyToken, authJwt.isAdmin], productsController.deleteProduct) // Delete Product

module.exports = router;