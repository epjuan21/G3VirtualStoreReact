const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
        name: {
            type: String,
            required: true,
            max: 100
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
            max: 255
        },
        imageUrl: {
            type: String,
            required: true,
            max: 255
        }
        ,category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CategoriesSchema'
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Products', ProductsSchema);