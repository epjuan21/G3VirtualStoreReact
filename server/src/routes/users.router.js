const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const authJwt = require('../middlewares/authJwt');
const verifySignUp = require('../middlewares/verifySignUp');

router.get('/', userController.getUsers);                                                                               // Get Users
router.get('/:id', userController.getUserById);                                                                         // Get User By Id
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignUp.checkRolesExisted], userController.addUser)        // Add User
router.post('/:id', authJwt.verifyToken, userController.updateUser)                                                     // Update User

module.exports = router;