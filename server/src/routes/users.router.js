const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const authJwt = require('../middlewares/authJwt');
const verifySignUp = require('../middlewares/verifySignUp');


router.get('/', userController.getUsers);                                                                           // Get Users
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted], userController.addUser)    // Add User

module.exports = router;