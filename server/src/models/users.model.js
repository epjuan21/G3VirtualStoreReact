const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: [true, "Name must be unique"],
            max: 100
        },
        email: {
            type: String,
            unique: [true,"Email is required" ],
            required: [true, "Email must be unique"]
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            max: 128
        },
        image: {
            type: String,
            required: true,
            default: 'https://res.cloudinary.com/jfrvdata/image/upload/v1637429204/Users/defaultUser.png'
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