const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller')

router.get('/', categoriesController.find)                          // Get all Categories
router.post('/insert', categoriesController.insertCategory)         // Insert Category
router.put('/update/:id', categoriesController.updateCategory)      // Update Category
router.delete('/delete/:id', categoriesController.deleteCategory)   // Delete Category

module.exports = router;