const User = require('../models/users.model');
const Role = require('../models/roles.model');
const generateToken = require('../lib/generateToken');

exports.register = async (req, res) => {

    try {
        const { name, email, password, image, roles } = req.body;
        const newUser = new User({ name, email, password, image })

        // Verificar si el Usuario Existe
        const userExists = await User.findOne({email});
        if (userExists) return res.status(400).json({message: 'El usuario ya existe'})

        // Roles
        if(roles) {
            const foundRoles = await Role.find({name: {$in: roles}})
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({name: 'user'})
            newUser.roles = [role._id];
        }
        const userSaved = await newUser.save();
        
        res.status(201).json({
            _id: userSaved._id,
            name: userSaved.name,
            email: userSaved.email,
            image: userSaved.image,
            roles: userSaved.roles,
            token: generateToken(userSaved._id)
        })

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.login = async (req, res) => {
   
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({ email }).populate('roles');
    
        if (!userFound) return res.status(404).json({message: 'User Not Found'});
    
        const matchPassword = await User.comparePassword(password, userFound.password);
    
        if (!matchPassword) return res.status(401).json({token: null, message: 'Invalid Password'});

        const authorities = []

        for (let i = 0; i < userFound.roles.length; i++) {
            authorities.push(userFound.roles[i].name);
        }

        res.json({
            _id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            image: userFound.image,
            roles: authorities,
            token: generateToken(userFound._id),
        })
    } 
    catch (error) {
        res.status(404).json(error)
    }
}