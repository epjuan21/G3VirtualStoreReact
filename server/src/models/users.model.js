const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
        name: {
            type: String,
            required: true,
            max: 100
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
            max: 128
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Users', usersSchema);