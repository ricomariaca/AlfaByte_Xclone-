const { check } = require('express-validator');


const validatePost = [
  check('username')
  .notEmpty().withMessage('El posts debe de traer el username'),

  check('body')
    .notEmpty().withMessage('El cuerpo del post es obligatorio') 
    .isLength({ min: 2,max: 255 }).withMessage('El cuerpo del post debe tener al menos 10 caracteres y maximo 255'),
];

module.exports = {
    validatePost,
};