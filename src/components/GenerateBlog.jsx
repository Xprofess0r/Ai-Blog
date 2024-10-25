import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

const GenerateBlog = () => {
  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/api/blog/generate', { title });
      setBlogContent(res.data.blogContent);
    } catch (error) {
      alert('Error generating blog');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Generate Blog</button>
      </form>
      {blogContent && (
        <div>
          <h2>Generated Blog</h2>
          <p>{blogContent}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateBlog;
