const Categories = require('../models/categories.model');
const mongoose = require('mongoose');

// Funcion para Convertir Id en ObjectId de MongoDB
const parseId = id => mongoose.Types.ObjectId(id)

// Get all Categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

// Get Category By Id
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Categories.findById(req.params.id)
        res.status(200).json(category)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

// Add Category
exports.addCategory = async(req, res) => {
    try {
        const { title, name, slug, description, imageUrl} = req.body;
        const newCategory = new Categories({title, name, slug, description, imageUrl})
        await newCategory.save()
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(404).json({ message: error })   
    }   
}

// Update Category
exports.updateCategory = async(req, res) => {
    try {
        const { title, name, slug, description, imageUrl } = req.body;
        const category = await Categories.findByIdAndUpdate(req.params.id, {
            title, name, slug, description, imageUrl
        }, { new: true });
        res.status(200).json(category)
    } catch (error) {
        res.status(404).json({ message: error }) 
    }
}

// Delete Category
exports.deleteCategory = async(req, res) => {
    try {
        const { id } = req.params
        await Categories.findByIdAndRemove({ _id: parseId(id)})
        res.status(200).json("Categoria Eliminada")
    } catch (error) {
        res.status(404).json({ message: error }) 
    }
}