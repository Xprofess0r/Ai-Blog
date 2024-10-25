import React, { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance'; // Use the axios instance

const AdminPage = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get('/api/user'); // Use axiosInstance to make an authenticated request
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getUserData(); // Fetch user data on component mount
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {userData ? <p>Welcome, {userData.username}</p> : <p>Loading...</p>}
    </div>
  );
};

export default AdminPage;
