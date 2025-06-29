import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = () => {
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/posts/${id}`)
        .then(res => setForm({ title: res.data.title, content: res.data.content }))
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      if (id) {
        await axios.put(`http://localhost:5000/api/posts/${id}`, form, config);
      } else {
        await axios.post('http://localhost:5000/api/posts', form, config);
      }
      navigate('/');
    } catch (err) {
      alert('Submit failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit' : 'New'} Post</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} />
      <button type="submit">{id ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export default PostForm;
