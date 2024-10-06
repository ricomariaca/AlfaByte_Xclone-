const express = require("express");
const routerPost = express.Router();
const { listPosts, createPost } = require('../../Tweet/Controllers/postsController'); 
const { validatePost } = require('../Validators/postsValidators');
const { validationResult } = require('express-validator');


routerPost.get('/listPosts', listPosts);
//routerPost.get('/createPosts', createPost);

routerPost.post('/createPosts', validatePost, (req, res, next) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    
    createPost(req, res);
});

module.exports = routerPost;
