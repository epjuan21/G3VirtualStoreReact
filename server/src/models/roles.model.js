const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        max: 100
    }
},
{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Role', roleSchema);