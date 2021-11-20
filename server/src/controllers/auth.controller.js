const User = require('../models/users.model');
const Role = require('../models/roles.model');
const generateToken = require('../lib/generateToken');

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
        
        const savedUser = await User.create({name, email, password, roles})

        res.status(201).json({
            _id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            token: generateToken(savedUser._id)
        })

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.login = async (req, res) => {
   
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({ email }).populate('roles');
    
        if (!userFound) return res.status(400).json({message: 'User Not Found'});
    
        const matchPassword = await User.comparePassword(password, userFound.password);
    
        if (!matchPassword) return res.status(401).json({token: null, message: 'Invalid Password'});
    
        const token = generateToken(userFound._id);

        res.json({
            _id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            token: generateToken(userFound._id)
        })
    } 
    catch (error) {
        res.status(404).json(error)
    }
}