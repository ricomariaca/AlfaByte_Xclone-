const express = require ("express");
const routerAuth = express.Router();


const { createUser } = require('../Controllers/registerController');
const { listLogin } = require('../Controllers/loginController');






routerAuth.post('/register',/*validateCreate,*/ createUser); // Profeeeeeee, el validator nos tira un error de permisos, no nos dio las tajadas para solucionarlo
routerAuth.get('/login', listLogin);


module.exports = routerAuth;