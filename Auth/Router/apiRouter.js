const express = require('express');
const routerAuth = express.Router();


const { createUser } = require('../Controllers/registerController');
const { LoginUser } = require('../Controllers/loginController');
const { validateCreateUser} = require('../Validators/registerValidators');
const { validateLogin} = require('../Validators/loginValidators');
const { validationResult } = require('express-validator');

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Lista usuarios filtrados por UID
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de usuarios filtrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   uid:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
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



