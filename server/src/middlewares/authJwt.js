const jwt = require('jsonwebtoken');
const Users = require('../models/users.model');
const Role = require('../models/roles.model');

exports.verifyToken = async  (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]
        if (!token) return res.status(403).json({message: "No token provided"});
        const { id } = jwt.verify(token, process.env.JWT_SECRET)
        const user = await Users.findById(id, {password: 0}); // password: 0 es una proyeccion de Mongo que significa que le password no se obtene o no se muestra en el resultado
        if(!user) return res.status(404).json({message: "No user found"});
        next()
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}

exports.isAdmin = async (req, res, next) => {
    
    const token = req.headers["x-access-token"]
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    const user = await Users.findById(id);
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for(let i = 0; i < roles.length; i++)
    {
        if(roles[i].name === 'admin') {
            next()
            return;
        }
    }

    return res.status(403).json({message: 'Require Admin Role'})
}