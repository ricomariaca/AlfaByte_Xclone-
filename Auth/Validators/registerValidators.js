const { check } = require('express-validator');

const validateCreateUser = [
  check('uid')
    .notEmpty().withMessage('El UID es obligatorio')
    .isLength({ min: 8 }).withMessage('El UID debe tener al menos 8 caracteres'),
  
  check('email')
    .isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
  
  check('username')
    .notEmpty().withMessage('El nombre de usuario es obligatorio')
    .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 3 caracteres'),
];

module.exports = {
  validateCreateUser,
};