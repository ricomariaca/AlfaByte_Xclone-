const { check } = require('express-validator');

const FollowValidators = [
  check('usernameSeguidor')
  .notEmpty().withMessage('La usernameSeguidor es obligatoria')
  .isLength({ min: 1 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  
  check('usernameSeguido')
    .notEmpty().withMessage('El usernameSeguido  es obligatorio')
    .isLength({ min: 1 }).withMessage('El nombre  debe tener al menos 3 caracteres'),

    check('body')
    .notEmpty().withMessage('el body es obligatorios')
    .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener al menos 10 caracteres'),

];

module.exports = {
    FollowValidators,
};