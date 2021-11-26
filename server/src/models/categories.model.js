const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
        title: {
            type: String,
            required: [true, "Category title is required"],
            unique: [true, "The category title must be unique"],
            minlength: [10, "The title must be more than 10 characters"],
            maxlength: [100,"The title must be less than 500 characters"]
        },
        name: {
            type: String,
            required: [true, "Category name is required"],
            unique: [true, "The category name must be unique"],
            minlength: [10, "The name must be more than 10 characters"],
            maxlength: [100,"The name must be less than 100 characters"]
        },
        slug: {
            type: String,
            required: [true, "The category slug is required"],
            unique: [true, "The category slug must be unique"],
            minlength: [20, "The slug must be more than 10 characters"],
            maxlength: [100,"The slug must be less than 500 characters"]
        },
        description: {
            type: String,
            required: [true, "The description of the category is required"],
            minlength: [20, "The description must be more than 20 characters"],
            maxlength: [500,"The description must be less than 500 characters"]
        },
        imageUrl: {
            type: String,
            required: [true, "The category image is required"],
            maxlength: [500,"The imageUrl must be less than 500 characters"]
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Categories', CategoriesSchema);