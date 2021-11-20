const User = require('../models/users.model');
const Role = require('../models/roles.model');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

    try {
        const { name, email, password, roles } = req.body;
        const newUser = new User({ name, email, password })

        // Verificar si el Usuario Existe
        const userExists = await User.findOne({email});
        if (userExists) return res.status(400).json({message: 'El usuario ya existe'})

        // Roles
        if(roles) {
            const foundRoles = await Role.find({name: {$in: roles}})
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({name: 'user'})
            newUser.roles= [role._id];
        }
        
        const savedUser = await newUser.save()
        res.status(201).json({
            name: name,
            email: email
        })

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.login = async (req, res) => {
   
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({ email }).populate('roles');
    
        if (!userFound) return res.status(400).json({message: 'User Not Found'})
    
        const matchPassword = await User.comparePassword(password, userFound.password)
    
        if (!matchPassword) return res.status(401).json({token: null, message: 'Invalid Password'})
    
        const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET, {
            expiresIn: 86400 // 24 Horass
        })
        res.json({token})
    } 
    catch (error) {
        res.status(404).json(error)
    }
}