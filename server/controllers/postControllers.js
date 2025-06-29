const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, author: req.user.id });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'username').sort({ createdAt: -1 });
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author', 'username');
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  if (post.author.toString() !== req.user.id)
    return res.status(403).json({ error: 'Unauthorized' });

  Object.assign(post, req.body);
  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  if (post.author.toString() !== req.user.id)
    return res.status(403).json({ error: 'Unauthorized' });

  await post.remove();
  res.json({ message: 'Post deleted' });
};
