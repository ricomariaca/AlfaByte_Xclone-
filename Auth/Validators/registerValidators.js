const { check } = require('express-validator');

const validateCreateUser = [
  check('password')
  .notEmpty().withMessage('La contraseña es obligatoria')
  .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  
  check('email')
    .isEmail().withMessage('Debe proporcionar un correo electrónico válido'),
  
  check('name')
    .notEmpty().withMessage('El nombre  es obligatorio')
    .isLength({ min: 3 }).withMessage('El nombre  debe tener al menos 3 caracteres'),

    check('lastName')
    .notEmpty().withMessage('Los apellidos son obligatorios')
    .isLength({ min: 10 }).withMessage('El nombre de usuario debe tener al menos 10 caracteres'),

    check('username')
    .notEmpty().withMessage('El usuario es obligatorio')
    .isLength({ min: 5 }).withMessage('El nombre de usuario debe tener al menos 5 caracteres'),
];

module.exports = {
  validateCreateUser,
};