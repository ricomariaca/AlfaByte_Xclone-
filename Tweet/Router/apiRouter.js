const express = require ("express");
const routerPost = express.Router();


const { listPosts } = require('../../Tweet/Controllers/postsController');





routerPost.get('/posts', listPosts);


module.exports = routerPost;