const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller')

router.get('/', categoriesController.getCategories)                 // Get all Categories
router.get('/:id', categoriesController.getCategoryById)            // Get Category By Id
router.post('/', categoriesController.addCategory)                  // Add Category
router.put('/:id', categoriesController.updateCategory)             // Update Category
router.delete('/:id', categoriesController.deleteCategory)          // Delete Category

module.exports = router;