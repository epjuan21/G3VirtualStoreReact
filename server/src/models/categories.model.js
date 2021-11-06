const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
        title: {
            type: String,
            required: true,
            max: 60
        },
        name: {
            type: String,
            required: true,
            max: 60
        },
        slug: {
            type: String,
            required: true,
            max: 60
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
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Categories', CategoriesSchema);