const express = require ("express");
const routerFollow = express.Router();
const { FollowValidators} = require('../../Follow/Validators/FollowValidators');
const { validationResult } = require('express-validator');


const { listFollowing, listFollowers } = require('../../Follow/Controllers/usersController');
/**
 * @swagger
 * components:
 *   schemas:
 *     FollowingList:
 *       type: object
 *       properties:
 *         following:
 *           type: array
 *           description: Lista de usuarios que el usuario autenticado sigue
 *           items:
 *             type: string
 *       example:
 *         following: ["user123", "user456", "user789"]
 * 
 *     FollowersList:
 *       type: object
 *       properties:
 *         followers:
 *           type: array
 *           description: Lista de usuarios que siguen al usuario autenticado
 *           items:
 *             type: string
 *       example:
 *         followers: ["user321", "user654", "user987"]
 * 
 *     UsersList:
 *       type: array
 *       items:
 *         type: string
 *       description: Lista de todos los usuarios disponibles en la plataforma
 *       example: ["user123", "user456", "user789", "user321"]
 */

/**
 * @swagger
 * /api/follow/following:
 *   get:
 *     summary: Lista los usuarios que el usuario autenticado está siguiendo
 *     tags: [Follow]
 *     responses:
 *       200:
 *         description: Lista de usuarios que el usuario sigue obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FollowingList'
 *       400:
 *         description: Error en los datos proporcionados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         description: Descripción del error
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/follow/followers:
 *   get:
 *     summary: Lista los seguidores del usuario autenticado
 *     tags: [Follow]
 *     responses:
 *       200:
 *         description: Lista de seguidores del usuario obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FollowersList'
 *       400:
 *         description: Error en los datos proporcionados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         description: Descripción del error
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/follow/users:
 *   get:
 *     summary: Lista todos los usuarios
 *     tags: [Follow]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsersList'
 *       500:
 *         description: Error interno del servidor
 */


routerFollow.get('/following', FollowValidators, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    listFollowing(req, res, next);
  });

  routerFollow.get('/followers', FollowValidators, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    listFollowers(req, res, next);
  });






module.exports = routerFollow;