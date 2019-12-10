const express = require('express');
const User = require('../controllers/user');
const router = express.Router();


router.get('/register', User.register);
router.get('/login', User.login);





module.exports = router;