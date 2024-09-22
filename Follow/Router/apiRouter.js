const express = require ("express");
const routerFollow = express.Router();


const { listUsers } = require('../../Follow/Controllers/usersController');

const { listFollowing, listFollowers } = require('../../Follow/Controllers/usersController');
//const { validateCreate } = require('../validators/users');




routerFollow.get('/users', listUsers);

routerFollow.get('/following', listFollowing);
routerFollow.get('/followers', listFollowers);

module.exports = routerFollow;