const User = require('../models/users.model');

exports.checkRolesExisted = async (req, res, next) => {

    const ROLES = ['user','admin'];

    if(req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({message: `Role ${req.body.roles[i]} does not exists`})
            }
        }
    }

    next()
}

exports.checkDuplicateUserNameOrEmail = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if (user) return res.status(400).json({message: 'The user already exists'})

    const email = await User.findOne({email: req.body.email})
    if (email) return res.status(400).json({message: 'The email already exists'})

    next()
}