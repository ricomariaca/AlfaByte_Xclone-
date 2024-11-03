const { check } = require('express-validator');

const validateLogin = [
  check('username')
    .notEmpty().withMessage('El username es obligatorio')
    .isLength({ min: 6 }).withMessage('El username debe tener al menos 6 caracteres'),
  
  check('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
];

module.exports = {
    validateLogin,
};
