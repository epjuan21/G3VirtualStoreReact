const User = require('../models/users.model');
const Role = require('../models/roles.model');
const generateToken = require('../lib/generateToken');

// Get Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

// Get User By id
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

// Add User
exports.addUser = async (req, res) => {
    try {
        const { name, email, password, roles } = req.body;

        const newUser = new User({
            name,
            email,
            password: await User.encryptPassword(password),
        })

        // Roles
        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } })
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({ name: 'user' })
            newUser.roles = [role._id];
        }

        const savedUser = await newUser.save()

        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 Horass
        })

        res.status(200).json({ token })

    } catch (error) {
        res.status(404).json({ message: error })
    }
}

// Update User
exports.updateUser = async(req, res) => {
    try {
        const { name, email, password, image } = req.body;

        const user = await User.findById(req.params.id);
        
        if (user) {
            user.name = name || user.name,
            user.email = email || user.email,
            user.image = image || user.image
        }

        if(password) {
            user.password = password
        }

        const updatedUser = await user.save();

        res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                image: updatedUser.image,
                token: generateToken(updatedUser._id)
            })
    } catch (error) {
        res.status(404).json({ message: error }) 
    }
}