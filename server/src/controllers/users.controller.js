const User = require('../models/users.model');
const Role = require('../models/roles.model');

// Get Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
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
        const user = await User.findByIdAndUpdate(req.params.id, {
            name, email, password, image
        }, { new: true });
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error }) 
    }
}