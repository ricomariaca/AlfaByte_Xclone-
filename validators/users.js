const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelder')

const validateCreate = [
    check('username')
    .exists() // si existe
    .not() // que no sea vacio
    .isEmpty(), 
    check('email')
    .exists() // si existe
    .isEmail()
    .not() // que no sea vacio
    .isEmpty(), 
    check('uid')
    .exists() // si existe
    .not() // que no sea vacio
    .isEmpty(),
    
    (request, response, next) =>{
        validateResult(request, response, next);
    }
    

]

module.exports = {validateCreate}