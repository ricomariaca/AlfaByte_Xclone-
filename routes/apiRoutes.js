const express = require ("express");
const router = express.Router();


const { listPosts } = require('../controllers/postsController');
const { listUsers } = require('../controllers/usersController');

router.get('/posts', listPosts);
router.get('/users', listUsers);

module.exports = router;