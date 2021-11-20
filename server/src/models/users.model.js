const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
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
        roles: [{
            ref: "Role",
            type:  mongoose.Schema.Types.ObjectId
        }]
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// Encriptar password antes de guardar
userSchema.pre('save', async function (next) {
    
    if(!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

// Comparar password del request con el de la base de datos
userSchema.statics.comparePassword = async(password, recievedPassword) => {

    return await bcrypt.compare(password, recievedPassword)
}

module.exports = mongoose.model('User', userSchema);