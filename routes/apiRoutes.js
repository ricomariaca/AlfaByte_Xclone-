const express = require ("express");
const router = express.Router();


const { listPosts } = require('../controllers/postsController');
const { listUsers } = require('../controllers/usersController');
const { createUser } = require('../controllers/registerController');
const { listLogin } = require('../controllers/loginController');
const { listFollowing, listFollowers } = require('../controllers/usersController');




router.get('/posts', listPosts);
router.get('/users', listUsers);
router.post('/register', createUser);
router.get('/login', listLogin);
router.get('/following', listFollowing);
router.get('/followers', listFollowers);

module.exports = router;