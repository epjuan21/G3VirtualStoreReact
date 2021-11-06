const Products = require('../models/products.model');

// Return all Products
exports.find = async function (req, res) {
    try {
        const products = await Products.find();
        res.json(products)
    } catch (error) {
        res.json({ message: err })
    }
}