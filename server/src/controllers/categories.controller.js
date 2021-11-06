const Categories = require('../models/categories.model');
const mongoose = require('mongoose');

// Funcion para Convertir Id en ObjectId de MongoDB
const parseId = id => mongoose.Types.ObjectId(id)

// Get all Categories
exports.find = async function (req, res) {
    try {
        const categories = await Categories.find();
        res.json(categories)
    } catch (error) {
        res.status(404).json({message: error.messager})
    }
}

// Insert Category
exports.insertCategory = async function (req, res, next) {
    Categories.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
}

// Update Category
exports.updateCategory = async function (req, res, next) {
    const { id } = req.params
    const body = req.body
    await Categories.findByIdAndUpdate( parseId(id), {
        $set: body
        }, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        }
    )
}

// Delete Category
exports.deleteCategory = async function (req, res) {
    const { id } = req.params
    await Categories.findByIdAndRemove({ _id: parseId(id)},
        (err, items) => {
            res.json({
                items
            })
        }
    )
}