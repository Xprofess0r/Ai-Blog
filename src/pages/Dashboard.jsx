import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance'; // Assuming you have axios instance setup

const Dashboard = () => {
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await axios.get('/api/user/blogs'); // Fetch user-specific blogs
        setUserBlogs(response.data.blogs);
      } catch (error) {
        console.error('Error fetching user blogs:', error);
      }
    };

    fetchUserBlogs();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userBlogs.length > 0 ? (
          userBlogs.map((blog, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h2 className="text-lg font-bold">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.content.slice(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p>No blogs available yet!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
