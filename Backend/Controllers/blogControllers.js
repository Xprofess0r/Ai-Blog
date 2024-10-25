const axios = require('axios');
const Blog = require('../models/blogModel');

exports.generateBlog = async (req, res) => {
  const { title } = req.body;

  try {
    const response = await axios.post('https://api.writesonic.com/v2/business/content/blog-intro', {
      title,
      length: 'long',
    }, {
      headers: { 'Authorization': `Bearer YOUR_WRITESONIC_API_KEY` },
    });

    const blogContent = response.data.data;
    res.json({ blogContent });
  } catch (error) {
    res.status(500).json({ message: 'Error generating blog' });
  }
};

const cloudinary = require('cloudinary').v2;
cloudinary.config({ secure: true });

exports.uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    res.status(500).json({ message: 'Image upload failed' });
  }
};
