const express = require ("express");
const routerFollow = express.Router();
const { FollowValidators} = require('../../Follow/Validators/FollowValidators');
const { validationResult } = require('express-validator');
const { listUsers } = require('../../Follow/Controllers/usersController');

const { listFollowing, listFollowers } = require('../../Follow/Controllers/usersController');

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


routerFollow.get('/users', listUsers);



module.exports = routerFollow;