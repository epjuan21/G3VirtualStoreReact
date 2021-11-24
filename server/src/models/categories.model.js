const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
        title: {
            type: String,
            required: [true, "Category title is required"],
            max: 60
        },
        name: {
            type: String,
            required: [true, "Category name is required"],
            max: 60
        },
        slug: {
            type: String,
            required: [true, "The category slug is required"],
            max: 60
        },
        description: {
            type: String,
            required: [true, "The description of the category is required"],
            max: 255
        },
        imageUrl: {
            type: String,
            required: [true, "The category image is required"],
            max: 255
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Categories', CategoriesSchema);