const { register, login } = require('../controllers/AuthController');

const router = require('express').Router();

router.post('/register',register);

router.post('/login',login);
// console.log("SERVER: Received this data:", req.body);

module.exports = router;