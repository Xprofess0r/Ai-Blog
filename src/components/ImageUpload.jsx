import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const res = await axiosInstance.post('/api/blog/upload', formData);
      alert('Image uploaded successfully');
      console.log('Image URL:', res.data.imageUrl);
    } catch (error) {
      alert('Error uploading image');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} accept="image/*" required />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ImageUpload;
