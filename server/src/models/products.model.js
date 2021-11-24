const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
        name: {
            type: String,
            required: [true, "Product name is required"],
            max: 100
        },
        price: {
            type: Number,
            required: [true, "The price of the product is required"],
        },
        description: {
            type: String,
            required: [true, "Product description is required"],   
            max: 255
        },
        imageUrl: {
            type: String,
            required: [true, "Product image is required"],
            max: 255
        }
        ,category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Categories'
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Products', ProductsSchema);