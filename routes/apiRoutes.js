const express = require ("express");
const router = express.Router();


const { listPosts } = require('../controllers/postsController');
const { listUsers } = require('../controllers/usersController');
const { createUser } = require('../controllers/registerController');
const { listLogin } = require('../controllers/loginController');

router.get('/posts', listPosts);
router.get('/users', listUsers);
router.post('/register', createUser);
router.get('/login', listLogin);

module.exports = router;