import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/get-blogs')
      .then(res => {
        setBlogs(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  const addNewBlog = () => {
    axios.post('http://localhost:8080/add-blog', { title, content, author })
      .then(res => {
        setBlogs([...blogs, res.data.data]);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container'>
      <h1>Blog App</h1>
      {
        blogs.map((blog, key) => (
          <div key={key} className="card">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Author: {blog.author}</p>
          </div>
        ))
      }
      <hr />
      <label htmlFor="">Title: </label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <label htmlFor=" ">Content: </label>
      <textarea onChange={(e) => setContent(e.target.value)} /><br /><br />
      <label htmlFor=" ">Author: </label>
      <input type="text" onChange={(e) => setAuthor(e.target.value)} /><br /><br />
      <button onClick={addNewBlog}>Add New Blog</button>
    </div>
  );
}

export default App;