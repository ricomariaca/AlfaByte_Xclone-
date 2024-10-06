const express = require('express');
const routerAuth = express.Router();


const { createUser } = require('../Controllers/registerController');
const { LoginUser } = require('../Controllers/loginController');
const { validateCreateUser} = require('../Validators/registerValidators');
const { validateLogin} = require('../Validators/loginValidators');
const { validationResult } = require('express-validator');


routerAuth.post('/register', validateCreateUser, (req, res, next) => {
 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
 
  createUser(req, res, next);
});

routerAuth.post('/login', validateLogin, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    LoginUser(req, res, next);
});

module.exports = routerAuth;



