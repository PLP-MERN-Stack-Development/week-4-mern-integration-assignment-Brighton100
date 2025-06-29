import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map(post => (
        <div key={post._id} style={{ border: '1px solid #ccc', marginBottom: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post._id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
