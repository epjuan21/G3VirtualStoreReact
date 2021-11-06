const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

router.post('/register', userController.register); // Registrar Usuario

module.exports = router;