const Users = require('../models/users.model');

const user = {

    register: async function (req, res) {
        try {
            const user = Users(req.body)
            await user.save()
                .then((data) => res.json(data))
                .catch((error) => res.json({ message: error }))
        } catch (error) {   
            return res.json({ message: error })
        }
    }
}

module.exports = user;