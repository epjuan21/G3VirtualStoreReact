const Products = require('../models/products.model');

// Return all Products
exports.getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

exports.addProduct = async(req, res) => {
    try {
        const { name, price, description, imageUrl, category_id} = req.body;
        const newProduct = new Products({name, price, description, imageUrl, category_id})
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(404).json({ message: error })   
    }   
}

exports.updateProduct = async(req, res) => {
    try {
        const { name, price, description, imageUrl, category_id } = req.body;
        const product = await Products.findByIdAndUpdate(req.params.id, {
            name, price, description, imageUrl, category_id
        });
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error }) 
    }
}

exports.deleteProduct = async(req, res) => {
    try {
        await Products.findByIdAndDelete(req.params.id)
        res.status(200).json("Articulo Eliminado")
    } catch (error) {
        res.status(404).json({ message: error }) 
    }
}