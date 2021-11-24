const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({
    name: {
        type: String,
        required: [true, "The role name is required"],
        unique: [true, "The role name must be unique"],
        max: 100
    }
},
{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Role', roleSchema);