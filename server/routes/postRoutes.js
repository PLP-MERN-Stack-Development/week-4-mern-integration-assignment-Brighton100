const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
} = require('../controllers/postController');

const auth = require('../middleware/authMiddleware');

router.route('/')
  .get(getPosts)
  .post(auth, createPost);

router.route('/:id')
  .get(getPostById)
  .put(auth, updatePost)
  .delete(auth, deletePost);

module.exports = router;
