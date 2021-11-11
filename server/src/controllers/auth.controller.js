const User = require('../models/users.model');
const Role = require('../models/roles.model');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {

    const { name, email, password, roles } = req.body;
   
    const newUser = new User({
        name,
        email,
        password:  await User.encryptPassword(password)
    })

    // Roles
    if(roles) {
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({name: 'user'})
        newUser.roles= [role._id];
    }

    const savedUser = await newUser.save()
    console.log(savedUser);

    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
        expiresIn: 86400 // 24 Horass
    })

    res.status(200).json({token})

}

exports.login = async (req, res) => {
   
    const userFound = await User.findOne({email: req.body.email}).populate('roles');

    if (!userFound) return res.status(400).json({message: 'User Not Found'})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, message: 'Invalid Password'})

    const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET, {
        expiresIn: 86400 // 24 Horass
    })

    res.json({token})

}

